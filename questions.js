let allQuestions = [
    {
        question: "Who won the 2011 Cricket World Cup?",
        options: ["India", "Australia", "England", "Pakistan"],
        answer: "India"
    },
    {
        question: "Which player has scored the most international runs?",
        options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "MS Dhoni"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Who is known as 'The Wall' in cricket?",
        options: ["Rahul Dravid", "Virender Sehwag", "Jacques Kallis", "AB de Villiers"],
        answer: "Rahul Dravid"
    },
    {
        question: "Which team has won the most ICC Cricket World Cups?",
        options: ["India", "Australia", "West Indies", "England"],
        answer: "Australia"
    },
    {
        question: "Who bowled the fastest delivery in cricket history?",
        options: ["Shoaib Akhtar", "Brett Lee", "Jeff Thomson", "Mitchell Starc"],
        answer: "Shoaib Akhtar"
    },
    {
        question: "Which country hosted the first Cricket World Cup?",
        options: ["England", "India", "Australia", "West Indies"],
        answer: "England"
    },
    {
        question: "What is the maximum number of overs in an ODI match?",
        options: ["20", "50", "60", "90"],
        answer: "50"
    },
    {
        question: "Who is known as 'Captain Cool' in cricket?",
        options: ["Virat Kohli", "MS Dhoni", "Ricky Ponting", "Kumar Sangakkara"],
        answer: "MS Dhoni"
    },
    {
        question: "Which player holds the record for the fastest century in ODIs?",
        options: ["AB de Villiers", "Shahid Afridi", "Chris Gayle", "Virat Kohli"],
        answer: "AB de Villiers"
    },
    {
        question: "What is the term for a score of zero in cricket?",
        options: ["Duck", "Goose", "Bear", "Elephant"],
        answer: "Duck"
    },
    {
        question: "Which cricket stadium is known as 'The Home of Cricket'?",
        options: ["Lord's", "Eden Gardens", "MCG", "Wankhede"],
        answer: "Lord's"
    },
    {
        question: "Who was the first batsman to score a double century in ODIs?",
        options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "What does LBW stand for in cricket?",
        options: ["Leg Before Wicket", "Left Beyond Wicket", "Leg Behind Wicket", "Long Ball Wicket"],
        answer: "Leg Before Wicket"
    },
    {
        question: "Which team won the ICC T20 World Cup in 2007?",
        options: ["India", "Pakistan", "Australia", "England"],
        answer: "India"
    },
    {
        question: "Which country won the 2019 Cricket World Cup?",
        options: ["England", "New Zealand", "India", "Australia"],
        answer: "England"
    }
    ,
    {
        question: "Who was the captain of the Indian cricket team when they won the 1983 World Cup?",
        options: ["Kapil Dev", "Sunil Gavaskar", "Mohinder Amarnath", "Dilip Vengsarkar"],
        answer: "Kapil Dev"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Who scored the first-ever double century in One Day Internationals?",
        options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country hosted the first-ever Cricket World Cup in 1975?",
        options: ["England", "Australia", "India", "West Indies"],
        answer: "England"
    },
    {
        question: "Which cricketer is known as 'The Wall'?",
        options: ["Rahul Dravid", "Virat Kohli", "Jacques Kallis", "Steve Waugh"],
        answer: "Rahul Dravid"
    },
    {
        question: "Who holds the record for the fastest century in ODIs?",
        options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Glenn Maxwell"],
        answer: "AB de Villiers"
    },
    {
        question: "Which batsman has the highest individual score in Test cricket?",
        options: ["Brian Lara", "Matthew Hayden", "Don Bradman", "Virender Sehwag"],
        answer: "Brian Lara"
    },
    {
        question: "Who was the first bowler to take 600 wickets in Test cricket?",
        options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "Courtney Walsh"],
        answer: "Courtney Walsh"
    },
    {
        question: "Which cricketer has hit the most sixes in international cricket?",
        options: ["Chris Gayle", "Shahid Afridi", "Rohit Sharma", "MS Dhoni"],
        answer: "Chris Gayle"
    },
    {
        question: "Which Indian cricketer has won the most Man of the Match awards in ODIs?",
        options: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Sourav Ganguly"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Who was the first batsman to score 100 international centuries?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which team won the inaugural ICC T20 World Cup in 2007?",
        options: ["India", "Pakistan", "Australia", "West Indies"],
        answer: "India"
    },
    {
        question: "Who was the first cricketer to score a triple century in Test cricket?",
        options: ["Don Bradman", "Brian Lara", "Virender Sehwag", "Chris Gayle"],
        answer: "Don Bradman"
    },
    {
        question: "Who is the only bowler to take 10 wickets in a Test innings twice?",
        options: ["Anil Kumble", "Jim Laker", "Muttiah Muralitharan", "Shane Warne"],
        answer: "Jim Laker"
    },
    {
        question: "Which player has played the most Test matches?",
        options: ["Sachin Tendulkar", "James Anderson", "Ricky Ponting", "Steve Waugh"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Who was the first captain to win three ICC trophies?",
        options: ["MS Dhoni", "Ricky Ponting", "Clive Lloyd", "Eoin Morgan"],
        answer: "MS Dhoni"
    },
    {
        question: "Who has taken the most catches as a fielder in Test cricket?",
        options: ["Rahul Dravid", "Jacques Kallis", "Ricky Ponting", "Mahela Jayawardene"],
        answer: "Rahul Dravid"
    },
    {
        question: "Which cricketer was known as 'The Prince of Trinidad'?",
        options: ["Brian Lara", "Chris Gayle", "Kieron Pollard", "Sunil Narine"],
        answer: "Brian Lara"
    },
    {
        question: "Who was the first bowler to take a hat-trick in a World Cup match?",
        options: ["Chetan Sharma", "Brett Lee", "Lasith Malinga", "Shane Warne"],
        answer: "Chetan Sharma"
    },
    {
        question: "Which team won the first-ever Day-Night Test match?",
        options: ["Australia", "India", "New Zealand", "South Africa"],
        answer: "Australia"
    },
    {
        question: "Who has scored the fastest fifty in T20 internationals?",
        options: ["Yuvraj Singh", "Chris Gayle", "Shahid Afridi", "AB de Villiers"],
        answer: "Yuvraj Singh"
    },
    {
        question: "Which player has the highest career batting average in Test cricket?",
        options: ["Don Bradman", "Virat Kohli", "Jacques Kallis", "Steve Smith"],
        answer: "Don Bradman"
    },
    {
        question: "Who won the ICC Cricketer of the Decade award (2010-2020)?",
        options: ["Virat Kohli", "Steve Smith", "Joe Root", "Kane Williamson"],
        answer: "Virat Kohli"
    },
    {
        question: "Who was the first cricketer to score a century in all three formats?",
        options: ["Chris Gayle", "Rohit Sharma", "Virat Kohli", "Brendon McCullum"],
        answer: "Chris Gayle"
    },
    {
        question: "Which Indian player has taken a hat-trick in a World Cup match?",
        options: ["Chetan Sharma", "Kuldeep Yadav", "Mohammed Shami", "Jasprit Bumrah"],
        answer: "Mohammed Shami"
    },
    {
        question: "Who was the highest run-scorer in the 2019 ICC Cricket World Cup?",
        options: ["Rohit Sharma", "David Warner", "Kane Williamson", "Joe Root"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which bowler holds the record for the most wickets in a single IPL season?",
        options: ["Dwayne Bravo", "Harshal Patel", "Lasith Malinga", "Kagiso Rabada"],
        answer: "Harshal Patel"
    },
    {
        question: "Who was the first Indian cricketer to take 500 wickets in Test cricket?",
        options: ["Anil Kumble", "Kapil Dev", "Zaheer Khan", "Ravichandran Ashwin"],
        answer: "Anil Kumble"
    },
    {
        question: "Which country won the 2023 ICC Cricket World Cup?",
        options: ["India", "Australia", "England", "New Zealand"],
        answer: "Australia"
    }
];
