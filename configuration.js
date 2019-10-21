const data = {
    complains: {
        1: {
            complainText: "כאבי ראש",
            questions: []
        },
        2: {
            complainText: "כאבי בטן",
            questions: []
        },
        3: {
            complainText: "כאבי גרון",
            questions: []
        }
    },
    questions: [
        {
            questionText: "חבלה",
            type: "check",
            complain: ["כאבי ראש", "כאבי בטן", "כאבי גרון"],
        },
        {
            questionText: "סחרחורת",
            type: "check",
            complain: ["כאבי ראש", "כאבי בטן", "כאבי גרון"],
        },
        {
            questionText: "בחילות",
            type: "check",
            complain: ["כאבי ראש", "כאבי בטן"],
        },
        {
            questionText: "הקאות",
            type: "amount",
            complain: ["כאבי ראש", "כאבי בטן"],
        },
        {
            questionText: "הקאה דמית ",
            type: "amount",
            complain: ["כאבי ראש", "כאבי בטן"],
            condition: "הקאות"
        },
        {
            questionText: "טשטוש בראייה",
            type: "check",
            complain: ["כאבי ראש"]
        },
        {
            questionText: "נזלת",
            type: "check",
            complain: ["כאבי ראש", "כאבי גרון"]
        },
        {
            questionText: "התגברות הכאב בהטיית הראש קדימה",
            type: "check",
            complain: ["כאבי ראש"]
        },
        {
            questionText: "עליית חום",
            type: "num",
            complain: ["כאבי ראש", "כאבי בטן", "כאבי גרון"]
        },
        //כאבי בטן
        {questionText: "שלשולים", type: "amount", complain: ["כאבי בטן"]},
        {questionText: "שלשול דמי", type: "check", complain: ["כאבי בטן"], condition: "שלשולים"},
        {questionText: "מאכל חריג", type: "check", complain: ["כאבי בטן"]},
        {
            questionText: "מקרים דומים בסביבה",
            type: "check",
            complain: ["כאבי בטן", "כאבי גרון"],
        },
        //כאבי גרון
        {questionText: "שיעול", type: "check", complain: ["כאבי גרון"]},
        {questionText: "קושי בבליעה", type: "check", complain: ["כאבי גרון"]},
        {questionText: "קושי בדיבור", type: "check", complain: ["כאבי גרון"]},
        {
            questionText: "היסטוריה של דלקות גרון",
            type: "check",
            complain: ["כאבי גרון"],
        }
    ]
};
