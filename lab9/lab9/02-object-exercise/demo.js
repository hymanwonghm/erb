let students = [
    {"firstname": "Tom", "score": {"English": 70, "Math": 80}},
    {"firstname": "Peter", "score": {"English": 10, "Math": 20}},
    {"firstname": "Mary", "score": {"English": 50, "Math": 50}},
    {"firstname": "Betty", "score": {"English": 40, "Math": 40}},
    {"firstname": "Paul", "score": {"English": 90, "Math": 30}},
]

let avgScore =students.map(s => {
    return {
        "firstname": s.firstname,
        "score": (s.score.English +s.score.Math)/2
    }
} 
)