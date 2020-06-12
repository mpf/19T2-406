window.MathJax = {
    // tex2jax: {
    //     inlineMath: [ ["\\(","\\)"] ],
    //     displayMath: [ ["\\[","\\]"] ]
    // },
    // extenstions: [Tex/AMSmath.js],
    TeX: {
        Macros: {
            vct: ["\\boldsymbol{#1}",1],
            mtx: ["\\boldsymbol{#1}",1],
            set: ["\\mathcal{#1}",1],

            bold: ["\\boldsymbol{#1}",1],

            va: ["\\vct a"],
            vb: ["\\vct b"],
            vc: ["\\vct c"],
            vd: ["\\vct d"],
            ve: ["\\vct e"],
            vf: ["\\vct f"],
            vg: ["\\vct g"],
            vh: ["\\vct h"],
            vi: ["\\vct i"],
            vj: ["\\vct j"],
            vk: ["\\vct k"],
            vl: ["\\vct l"],
            vm: ["\\vct m"],
            vn: ["\\vct n"],
            vo: ["\\vct o"],
            vp: ["\\vct p"],
            vq: ["\\vct q"],
            vr: ["\\vct r"],
            vs: ["\\vct s"],
            vt: ["\\vct t"],
            vu: ["\\vct u"],
            vv: ["\\vct v"],
            vw: ["\\vct w"],
            vx: ["\\vct x"],
            vy: ["\\vct y"],
            vz: ["\\mtx z"],

            mA: ["\\mtx A"],
            mB: ["\\mtx B"],
            mC: ["\\mtx C"],
            mD: ["\\mtx D"],
            mE: ["\\mtx E"],
            mF: ["\\mtx F"],
            mG: ["\\mtx G"],
            mH: ["\\mtx H"],
            mI: ["\\mtx I"],
            mJ: ["\\mtx J"],
            mK: ["\\mtx K"],
            mL: ["\\mtx L"],
            mM: ["\\mtx M"],
            mN: ["\\mtx N"],
            mO: ["\\mtx O"],
            mP: ["\\mtx P"],
            mQ: ["\\mtx Q"],
            mR: ["\\mtx R"],
            mS: ["\\mtx S"],
            mT: ["\\mtx T"],
            mU: ["\\mtx U"],
            mY: ["\\mtx V"],
            mW: ["\\mtx W"],
            mX: ["\\mtx X"],
            mY: ["\\mtx Y"],
            mZ: ["\\mtx Z"],

            R: ["\\mathbb R"],
            C: ["\\mathbb C"],

            vzero: ["\\vct 0"], 
            mzero: ["\\mtx 0"],

            setA: ["\\set A"],
            setB: ["\\set B"],
            setC: ["\\set C"],
            setD: ["\\set D"],
            setE: ["\\set E"],
            setF: ["\\set F"],
            setG: ["\\set G"],
            setH: ["\\set H"],
            setI: ["\\set I"],
            setJ: ["\\set J"],
            setK: ["\\set K"],
            setL: ["\\set L"],
            setM: ["\\set M"],
            setN: ["\\set N"],
            setO: ["\\set O"],
            setP: ["\\set P"],
            setQ: ["\\set Q"],
            setR: ["\\set R"],
            setS: ["\\set S"],
            setT: ["\\set T"],
            setU: ["\\set U"],
            setV: ["\\set V"],
            setW: ["\\set W"],
            setX: ["\\set X"],
            setY: ["\\set Y"],
            setZ: ["\\set Z"],

            exa:["\\text{Example #1:}",1],
            Exa:["\\text{Example}"],


            def:["\\text{Definition:}"],

            lemma: ["\\text{Lemma #1:}",1],
            Lemma: ["\\text{Lemma:}"],


            trace: ["\\textbf{tr}(#1)",1],

            lambdamax: ["\\lambda_{\\text{max}}"],

            lambdamin: ["\\lambda_{\\text{min}}"],


            vec: ["\\textbf{vec}(#1)",1],

            proof: ["\\textit{Proof:}"],

            prop: ["\\textbf{Proposition:}"],


            func: ["\\mathcal{#1}",1],

            bmat: ["\\begin{bmatrix}"],
            emat: ["\\end{bmatrix}"],

            bmatp: ["\\begin{pmatrix}"],
            ematp: ["\\end{pmatrix}"],
            
            
            red: ["{\\color{red}#1}",1],

            minimize: ["\\mathop{\\text{minimize}}"],
            maximize: ["\\mathop{\\text{maximize}}"],
            argmin: ["\\mathop{\\text{argmin}}"],
            argmax: ["\\mathop{\\text{argmax}}"],

            st: ["\\text{subject to}"],
            rank: ["\\textbf{rank}"],
            daig: ["\\textbf{diag}"],
            mb: ["\\mathbf"],
            tr: ["\\mathbf{tr}"],
            
            proj: ["\\mathbf{proj}"],
            vnull: ["\\mathbf{null}"],
            range: ["\\mathbf{range}"],
            Re: ["\\mathbf R"],

            trans: ["^\\intercal"],
            det: ["\\text{det}"],
            vrho: ["\\vct \\rho"],
            vnu: ["\\vct \\nu"],

            pr: ["{\\textbf{Pr}}"]




        },
        TagSide: "right",
        TagIndent: ".8em",
        MultLineWidth: "85%",
        equationNumbers: {
            autoNumber: "AMS",
        },
        unicode: {
            fonts: "STIXGeneral,'Arial Unicode MS'"
        }
    },
    displayAlign: "center",
    showProcessingMessages: true,
    messageStyle: "none"
};
