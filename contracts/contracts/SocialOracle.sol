// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStakeContract {
    function getStakeAmount(address user) external view returns (uint256);
    function penalize(address user) external;
}

contract SocialOracle {
    IStakeContract public stakeContract;

    struct Question {
        uint256 id;
        uint256 deadline;
        bool isAnswered;
        bool correctAnswer; // true for A, false for B
        bool answerDetermined;
    }

    struct AnswerStats {
        uint256 totalA; // Total stakers for option A
        uint256 totalB; // Total stakers for option B
    }

    mapping(uint256 => Question) public questions;
    mapping(uint256 => mapping(address => bool)) public answers;
    mapping(uint256 => AnswerStats) private answerStats;
    mapping(uint256 => mapping(address => bool)) public hasAnswered;

    event QuestionCreated(uint256 indexed id, uint256 deadline);
    event AnswerSubmitted(uint256 indexed questionId, address indexed user, bool answer);
    event QuestionAnswered(uint256 indexed id, bool correctAnswer);

    constructor(address _stakeContractAddress) {
        stakeContract = IStakeContract(_stakeContractAddress);
    }

    function addQuestion(uint256 _id, uint256 _deadline) external {
        // Access control checks here
        questions[_id] = Question(_id, _deadline, false, false, false);
        emit QuestionCreated(_id, _deadline);
    }

    function submitAnswer(uint256 _questionId, bool _answer) external {
        Question storage question = questions[_questionId];
        require(question.deadline > block.timestamp, "Deadline has passed");
        require(stakeContract.getStakeAmount(msg.sender) >= 100, "Not enough tokens staked");
        require(!hasAnswered[_questionId][msg.sender], "Already answered");

        answers[_questionId][msg.sender] = _answer;
        hasAnswered[_questionId][msg.sender] = true;
        if (_answer) {
            answerStats[_questionId].totalA += 1;
        } else {
            answerStats[_questionId].totalB += 1;
        }
        emit AnswerSubmitted(_questionId, msg.sender, _answer);
    }

    function getQuestionOutcome(uint256 _questionId) external view returns (bool outcome, bool determined) {
        Question memory question = questions[_questionId];
        return (question.correctAnswer, question.answerDetermined);
    }


    function determineCorrectAnswer(uint256 _questionId) external {
        // Access control checks here
        Question storage question = questions[_questionId];
        // require(question.deadline < block.timestamp, "Still open for answers");
        require(!question.answerDetermined, "Answer already determined");

        AnswerStats storage stats = answerStats[_questionId];
        question.isAnswered = true;
        question.correctAnswer = stats.totalA > stats.totalB;
        question.answerDetermined = true;

        emit QuestionAnswered(_questionId, question.correctAnswer);


        // Optionally penalize incorrect stakers here or leave it to the staking contract
        for (uint256 i = 0; i < stats.totalA + stats.totalB; i++) {
            // This pseudocode represents iterating over all answers and penalizing incorrect ones
            // Solidity doesn't allow this directly; you'd need a way to track all staker addresses
        }
    }

    // Additional functions like checking answer correctness or penalizing incorrect answers could go here
}
