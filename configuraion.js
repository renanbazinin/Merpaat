const data = {
    questions: [
        {
            questionTest: "חבלה",
            type: "check",
            Tlon: ["כאבי ראש", "כאבי בטן", "כאבי גרון"],
        },
        {
            questionTest: "סחרחורת",
            type: "check",
            Tlon: ["כאבי ראש", "כאבי בטן", "כאבי גרון"],
        },
        {
            questionTest: "בחילות",
            type: "check",
            Tlon: ["כאבי ראש", "כאבי בטן"],
        },
        {
            questionTest: "הקאות",
            type: "amount",
            Tlon: ["כאבי ראש", "כאבי בטן"],
        },
        {
            questionTest: "הקאה דמית ",
            type: "amount",
            Tlon: ["כאבי ראש", "כאבי בטן"],
            condition: "הקאות"
        },
        {
            questionTest: "טשטוש בראייה",
            type: "check",
            Tlon: ["כאבי ראש"]
        },
        {
            questionTest: "נזלת",
            type: "check",
            Tlon: ["כאבי ראש", "כאבי גרון"]
        },
        {
            questionTest: "התגברות הכאב בהטיית הראש קדימה",
            type: "check",
            Tlon: ["כאבי ראש"]
        },
        {
            questionTest: "עליית חום",
            type: "num",
            Tlon: ["כאבי ראש", "כאבי בטן", "כאבי גרון"]
        },
        //כאבי בטן
        {questionTest: "שלשולים", type: "amount", Tlon: ["כאבי בטן"]},
        {questionTest: "שלשול דמי", type: "check", Tlon: ["כאבי בטן"], condition: "שלשולים"},
        {questionTest: "מאכל חריג", type: "check", Tlon: ["כאבי בטן"]},
        {
            questionTest: "מקרים דומים בסביבה",
            type: "check",
            Tlon: ["כאבי בטן", "כאבי גרון"],
        },
        //כאבי גרון
        {questionTest: "שיעול", type: "check", Tlon: ["כאבי גרון"]},
        {questionTest: "קושי בבליעה", type: "check", Tlon: ["כאבי גרון"]},
        {questionTest: "קושי בדיבור", type: "check", Tlon: ["כאבי גרון"]},
        {
            questionTest: "היסטוריה של דלקות גרון",
            type: "check",
            Tlon: ["כאבי גרון"],
        }
    ]
};

const TheProblems = {
    Tlonot: [
        {
            Tlon: "כאבי ראש"
        },
        {Tlon: "כאבי בטן"},
        {Tlon: "כאבי גרון"}]
};
