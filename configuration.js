const data = {
    complains: {
        headaces: {
            complainText: "כאבי ראש",
            questions: [
                1
            ]
        },
        2: {
            complainText: "כאבי בטן",
            questions: [
                17
            ]
        },
        3: {
            complainText: "כאבי גרון",
            questions: [
                8
            ]
        }
    },
    questions: {
        1: {
            questionText: "חבלה",
            type: "check",
            complain: ["כאבי ראש", "כאבי בטן", "כאבי גרון"],
        },
        2: {
            questionText: "סחרחורת",
            type: "check",
            complain: ["כאבי ראש", "כאבי בטן", "כאבי גרון"],
        },
        3: {
            questionText: "בחילות",
            type: "check",
            complain: ["כאבי ראש", "כאבי בטן"],
        },
        4: {
            questionText: "הקאות",
            type: "amount",
            complain: ["כאבי ראש", "כאבי בטן"],
        },
        5: {
            questionText: "הקאה דמית ",
            type: "amount",
            complain: ["כאבי ראש", "כאבי בטן"],
            condition: "הקאות"
        },
        6: {
            questionText: "טשטוש בראייה",
            type: "check",
            complain: ["כאבי ראש"]
        },
        7: {
            questionText: "נזלת",
            type: "check",
            complain: ["כאבי ראש", "כאבי גרון"]
        },
        8: {
            questionText: "התגברות הכאב בהטיית הראש קדימה",
            type: "check",
            complain: ["כאבי ראש"]
        },
        9: {
            questionText: "עליית חום",
            type: "num",
            complain: ["כאבי ראש", "כאבי בטן", "כאבי גרון"]
        },
        //כאבי בטן
        10: {questionText: "שלשולים", type: "amount", complain: ["כאבי בטן"]},
        11: {questionText: "שלשול דמי", type: "check", complain: ["כאבי בטן"], condition: "שלשולים"},
        12: {questionText: "מאכל חריג", type: "check", complain: ["כאבי בטן"]},
        13: {
            questionText: "מקרים דומים בסביבה",
            type: "check",
            complain: ["כאבי בטן", "כאבי גרון"],
        },
        //כאבי גרון
        14: {questionText: "שיעול", type: "check", complain: ["כאבי גרון"]},
        15: {questionText: "קושי בבליעה", type: "check", complain: ["כאבי גרון"]},
        16: {questionText: "קושי בדיבור", type: "check", complain: ["כאבי גרון"]},
        17: {
            questionText: "היסטוריה של דלקות גרון",
            type: "check",
            complain: ["כאבי גרון"],
        }
    }
};
