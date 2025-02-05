import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  likedNames: Array<{
    number: number;
    arabic: string;
    transliteration: string;
    english: string;
    reference: {
      arabic: string;
      english: string;
      citation: string;
    };
    meaning: {
      arabic: string;
      english: string;
    };
  }>;
}

type QuestionType = 'arabic-english' | 'english-arabic' | 'arabic-meaning' | 'meaning-arabic';

interface Question {
  type: QuestionType;
  question: string;
  correctAnswer: string;
  options: string[];
}

const COMPLETION_DUAS = [
  "May Allah grant you Jannah Al-Firdaus without account",
  "May Allah allow you to enter Jannah from any of the eight gates you prefer",
  "May Allah make your path to Jannah easy and blessed",
  "May Allah grant you the highest ranks in Jannah and make you one of the most pious ones in this dunya",
  "May Allah remove all your worries, replace your sadness with happiness, and fill your heart with tranquility and give you the best of the hereafter and this Dunya",
  "May Allah grant you steadfastness in times of trials, patience in times of difficulty, and gratitude in times of ease",
  "May Allah reunite you with your loved ones in Jannah, where there is no pain, no separation, and only eternal joy",
  "May Allah write your name among those who will be called by the angels with joy on the Day of Judgment, saying, 'Enter Jannah in peace'",
  "May Allah bless you with a beautiful ending to this life, with your last words being the Shahada, and your first sight in the Hereafter being the face of your Lord"
];

export const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, likedNames }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completionDua, setCompletionDua] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [questionResults, setQuestionResults] = useState<Array<'correct' | 'incorrect' | 'pending'>>([]);

  useEffect(() => {
    if (isOpen && likedNames.length > 0) {
      setIsLoading(true);
      const generatedQuestions = generateQuestions(likedNames);
      setQuestions(generatedQuestions);
      setCurrentQuestionIndex(0);
      setScore(0);
      setSelectedAnswer(null);
      setIsCompleted(false);
      setCompletionDua(COMPLETION_DUAS[Math.floor(Math.random() * COMPLETION_DUAS.length)]);
      setQuestionResults(new Array(generatedQuestions.length).fill('pending'));
      setIsLoading(false);
    }
  }, [isOpen, likedNames]);

  if (!isOpen) return null;

  if (likedNames.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full mx-4 p-6 relative shadow-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="text-center py-8">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Please like some names first to start the quiz.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading || !questions.length) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full mx-4 p-6 relative shadow-2xl">
          <div className="text-center py-8">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Loading quiz...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion.correctAnswer;
    const newResults = [...questionResults];
    newResults[currentQuestionIndex] = isCorrect ? 'correct' : 'incorrect';
    setQuestionResults(newResults);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setIsCompleted(true);
      }
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full mx-4 p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-8 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {!isCompleted ? (
          <>
            <div className="flex gap-1 w-full mb-6">
              {questionResults.map((result, index) => (
                <div
                  key={index}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    result === 'pending'
                      ? 'bg-gray-200'
                      : result === 'correct'
                      ? 'bg-green-500'
                      : 'bg-red-500'
                  } ${currentQuestionIndex === index ? 'opacity-100' : 'opacity-70'}`}
                />
              ))}
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {currentQuestion.question}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 rounded-lg border text-left transition-all duration-200 ${
                      selectedAnswer === null
                        ? 'hover:bg-emerald-50 dark:hover:bg-emerald-900/30'
                        : selectedAnswer === option
                        ? option === currentQuestion.correctAnswer
                          ? 'bg-green-100 border-green-500 dark:bg-green-900/30'
                          : 'bg-red-100 border-red-500 dark:bg-red-900/30'
                        : option === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-500 dark:bg-green-900/30'
                        : ''
                    }`}
                  >
                    <span className={option.includes('ال') ? 'font-arabic' : ''}>
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold text-emerald-600">
              Quiz Completed!
            </h3>
            <p className="text-lg">
              Your score: {score} out of {questions.length}
            </p>
            <p className="text-emerald-600 italic">{completionDua}</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

function generateQuestions(likedNames: QuizModalProps['likedNames']): Question[] {
  const questionTypes: QuestionType[] = [
    'arabic-english',
    'english-arabic',
    'arabic-meaning',
    'meaning-arabic',
  ];

  const questions: Question[] = [];

  likedNames.forEach((name) => {
    const type = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    const otherOptions = likedNames.filter((n) => n.number !== name.number);
    let question: Question;

    switch (type) {
      case 'arabic-english':
        question = {
          type,
          question: `What is the English transliteration of "${name.arabic}"?`,
          correctAnswer: name.transliteration,
          options: shuffle([
            name.transliteration,
            ...getRandomItems(
              otherOptions.map((n) => n.transliteration),
              3
            ),
          ]),
        };
        break;
      case 'english-arabic':
        question = {
          type,
          question: `What is the Arabic name for "${name.transliteration}"?`,
          correctAnswer: name.arabic,
          options: shuffle([
            name.arabic,
            ...getRandomItems(
              otherOptions.map((n) => n.arabic),
              3
            ),
          ]),
        };
        break;
      case 'arabic-meaning':
        question = {
          type,
          question: `What is the meaning of "${name.arabic}"?`,
          correctAnswer: name.meaning.english,
          options: shuffle([
            name.meaning.english,
            ...getRandomItems(
              otherOptions.map((n) => n.meaning.english),
              3
            ),
          ]),
        };
        break;
      case 'meaning-arabic':
        question = {
          type,
          question: `Which name means "${name.meaning.english}"?`,
          correctAnswer: name.arabic,
          options: shuffle([
            name.arabic,
            ...getRandomItems(
              otherOptions.map((n) => n.arabic),
              3
            ),
          ]),
        };
        break;
    }

    questions.push(question);
  });

  return shuffle(questions);
}

function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getRandomItems<T>(array: T[], count: number): T[] {
  return shuffle(array).slice(0, count);
} 