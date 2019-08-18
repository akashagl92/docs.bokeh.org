(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("96255c34-9fdd-4770-ad82-8a90c34f64d6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '96255c34-9fdd-4770-ad82-8a90c34f64d6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"63a14fde-4800-45d5-b02a-67def219a349":{"roots":{"references":[{"attributes":{"args":{"s2":{"id":"95a218e4-b51c-437c-8a0b-a59bcdb472ff","type":"ColumnDataSource"}},"code":"\n        var inds = cb_obj.selected['1d'].indices;\n        var d1 = cb_obj.data;\n        var d2 = s2.data;\n        d2['x'] = []\n        d2['y'] = []\n        for (i = 0; i < inds.length; i++) {\n            d2['x'].push(d1['x'][inds[i]])\n            d2['y'].push(d1['y'][inds[i]])\n        }\n        s2.trigger('change');\n    "},"id":"aae13558-83f9-48cf-9e90-b0211df1656e","type":"CustomJS"},{"attributes":{},"id":"8c22cb26-fedf-49ea-85e4-663f9bec55a2","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d1c4187c-a4b0-471e-83a7-531824765242","type":"Circle"},{"attributes":{"formatter":{"id":"eb552bfb-e2d9-4f39-bf68-6ee67f63c63b","type":"BasicTickFormatter"},"plot":{"id":"89ef3c1c-7fcb-42bf-b708-f82a9c2b17e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"9502fc24-7a0d-4d58-9a30-955249b78d4f","type":"BasicTicker"}},"id":"447f3c79-f02a-4d70-996a-76b4057a4dbb","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Select Here"},"id":"8156b7f0-a002-4b6a-961d-0754152d2fb6","type":"Title"},{"attributes":{},"id":"eb552bfb-e2d9-4f39-bf68-6ee67f63c63b","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"89ef3c1c-7fcb-42bf-b708-f82a9c2b17e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"9502fc24-7a0d-4d58-9a30-955249b78d4f","type":"BasicTicker"}},"id":"0a6bb939-caba-4fef-800c-84b2a576130e","type":"Grid"},{"attributes":{},"id":"4e69e701-2d23-4af2-b469-55a8fe10acca","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"57dc15c5-4814-4ecd-96d3-5c4a516d4249","type":"LinearAxis"}],"left":[{"id":"447f3c79-f02a-4d70-996a-76b4057a4dbb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"57dc15c5-4814-4ecd-96d3-5c4a516d4249","type":"LinearAxis"},{"id":"5219355e-cab0-4141-9c80-89a072aecf2d","type":"Grid"},{"id":"447f3c79-f02a-4d70-996a-76b4057a4dbb","type":"LinearAxis"},{"id":"0a6bb939-caba-4fef-800c-84b2a576130e","type":"Grid"},{"id":"cd2eb673-0784-4444-bba6-c766b0f37af7","type":"GlyphRenderer"}],"title":{"id":"0e253b91-3e3e-4e95-b0ea-83686f6eddc5","type":"Title"},"tool_events":{"id":"bedcba5a-5015-4b2d-989a-c86337806bec","type":"ToolEvents"},"toolbar":{"id":"5a4e4577-ed13-4678-baba-3a8ac4669803","type":"Toolbar"},"x_range":{"id":"f78d265e-fe62-4fd9-ba68-b67cfe0a582d","type":"Range1d"},"y_range":{"id":"00c75e70-8722-4a05-861b-b9c8918b0420","type":"Range1d"}},"id":"89ef3c1c-7fcb-42bf-b708-f82a9c2b17e1","subtype":"Figure","type":"Plot"},{"attributes":{"below":[{"id":"4bde1e75-9767-4d54-8e83-9d21b90540d8","type":"LinearAxis"}],"left":[{"id":"82a5d3b9-fa0c-45a8-982c-13312b32aad8","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"4bde1e75-9767-4d54-8e83-9d21b90540d8","type":"LinearAxis"},{"id":"74ef3c3c-78ef-4c48-8242-7f3d772ae9e1","type":"Grid"},{"id":"82a5d3b9-fa0c-45a8-982c-13312b32aad8","type":"LinearAxis"},{"id":"d3284a11-4e40-44a1-b912-ad5e193f7f2d","type":"Grid"},{"id":"584f8c7d-b4f6-4dee-b0bd-29bcc63fc6da","type":"PolyAnnotation"},{"id":"68af629c-139b-4d23-b783-bb935b35f67a","type":"GlyphRenderer"}],"title":{"id":"8156b7f0-a002-4b6a-961d-0754152d2fb6","type":"Title"},"tool_events":{"id":"8c22cb26-fedf-49ea-85e4-663f9bec55a2","type":"ToolEvents"},"toolbar":{"id":"c87ae06f-2f64-470c-9713-4e961bce92c2","type":"Toolbar"},"x_range":{"id":"6d0ec4d3-227b-4141-ba0d-fc683d95df46","type":"DataRange1d"},"y_range":{"id":"818216fa-6699-4f99-ad50-9be1b5229ece","type":"DataRange1d"}},"id":"0cfe35c9-eca5-4a48-987c-a24802f89609","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5dadd474-bdd5-420d-901a-20b1957d0589","type":"Circle"},{"attributes":{"formatter":{"id":"c3517610-0752-48c5-9ba2-e24e598b3646","type":"BasicTickFormatter"},"plot":{"id":"89ef3c1c-7fcb-42bf-b708-f82a9c2b17e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7cd493d-2d7d-4620-a97f-ba19fb48fa8b","type":"BasicTicker"}},"id":"57dc15c5-4814-4ecd-96d3-5c4a516d4249","type":"LinearAxis"},{"attributes":{},"id":"f586fe47-fd72-4957-bb50-5b1ca291dc77","type":"BasicTickFormatter"},{"attributes":{},"id":"9502fc24-7a0d-4d58-9a30-955249b78d4f","type":"BasicTicker"},{"attributes":{},"id":"d7cd493d-2d7d-4620-a97f-ba19fb48fa8b","type":"BasicTicker"},{"attributes":{"data_source":{"id":"95a218e4-b51c-437c-8a0b-a59bcdb472ff","type":"ColumnDataSource"},"glyph":{"id":"831e5bc8-0cc2-48e6-bafe-d32a519d3fc8","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"c54041e2-5001-40ef-8ff9-8a7c4689a987","type":"Circle"},"selection_glyph":null},"id":"cd2eb673-0784-4444-bba6-c766b0f37af7","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"818216fa-6699-4f99-ad50-9be1b5229ece","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c54041e2-5001-40ef-8ff9-8a7c4689a987","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"584f8c7d-b4f6-4dee-b0bd-29bcc63fc6da","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"5a4e4577-ed13-4678-baba-3a8ac4669803","type":"Toolbar"},{"attributes":{"formatter":{"id":"4e69e701-2d23-4af2-b469-55a8fe10acca","type":"BasicTickFormatter"},"plot":{"id":"0cfe35c9-eca5-4a48-987c-a24802f89609","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5ebc69d-098e-40c7-a132-99a99c2e32cd","type":"BasicTicker"}},"id":"82a5d3b9-fa0c-45a8-982c-13312b32aad8","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6d0ec4d3-227b-4141-ba0d-fc683d95df46","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9e3edc74-e4f0-4b07-8cd1-74aaa12eb8b5","type":"LassoSelectTool"}]},"id":"c87ae06f-2f64-470c-9713-4e961bce92c2","type":"Toolbar"},{"attributes":{},"id":"bedcba5a-5015-4b2d-989a-c86337806bec","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.6},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"831e5bc8-0cc2-48e6-bafe-d32a519d3fc8","type":"Circle"},{"attributes":{"callback":{"id":"aae13558-83f9-48cf-9e90-b0211df1656e","type":"CustomJS"},"column_names":["x","y"],"data":{"x":[0.854655733594518,0.41208025023633943,0.41774692560813387,0.2811491060061384,0.1208561643852819,0.7666498705395106,0.21128276915558764,0.3959999163002097,0.6549519308159458,0.6515833049007134,0.32065694848731074,0.6700676603599769,0.9238912878948429,0.034994930188552265,0.007991556778751518,0.2716770755463186,0.05414767583457836,0.6606836538522376,0.9702410104013088,0.13459043967692041,0.3583993151048772,0.10063929656192816,0.466521406540086,0.8477586238182415,0.160742908916384,0.2247499732612488,0.365661946764958,0.4084259793235612,0.6852096884494849,0.3044949093200444,0.6671664527567784,0.3304361599381539,0.7195295112735549,0.9831537720961621,0.8124307057288279,0.39251433336138775,0.9069937892268316,0.8703774172532576,0.741677760141695,0.30712945123849333,0.5234540928981026,0.2968771606061865,0.9887016713828662,0.24329655230733283,0.6249609335719103,0.3027912289858875,0.4922009625543837,0.2753518278008501,0.460357709033987,0.3057216007690934,0.6035885437293002,0.6975441461635211,0.02865932323486975,0.1491146038693223,0.9551285189068477,0.6917189012063005,0.06393959009973715,0.06434659291251643,0.7252067254978668,0.33226531900850986,0.09316324392776199,0.5484111291912959,0.7743218284822331,0.9575771050151325,0.9599764853581084,0.40159972345266814,0.24602225135506617,0.656271903050522,0.2607650141923632,0.579998258373327,0.33078783963972347,0.7356885456787939,0.6062145741204499,0.8437778436560928,0.6653435301248994,0.2152731886206276,0.17735686634697478,0.7862574811787322,0.9909970087157378,0.2703411504446772,0.5413415855681657,0.4221344573196685,0.03880562995824366,0.11061389853142356,0.052479687925020335,0.348944552427807,0.8874709342982534,0.3313662247035517,0.5173547803184555,0.9867987960122344,0.1712400888667549,0.2894658669885305,0.6241101773439945,0.29801552302034406,0.9777836907944156,0.6849383852875033,0.18258658049900722,0.7779693979103582,0.8391089971535483,0.8080075382040813,0.05885407451432878,0.2522009837426279,0.9669266526015806,0.06971653132168121,0.5413194544967328,0.18444480318616008,0.4852704777317084,0.6000569102317741,0.5228795514213198,0.6709460372618703,0.9014196122131671,0.22501860195929357,0.6539131822758616,0.8095690352399679,0.14870676863803634,0.13444971575517584,0.7072514451213109,0.764947042217713,0.10973660292920984,0.33775786848359923,0.7348913678806376,0.8380662222403711,0.6952299477332354,0.4042103975922161,0.24110726469299748,0.8646033332101253,0.9841482770073845,0.09707924329791873,0.7188929527508661,0.14777111194881476,0.48786777724645836,0.18300787685214415,0.8874704169254142,0.9007611630126643,0.142026213673918,0.06353381999734287,0.15378614197312246,0.8387805034099779,0.03685606838822575,0.3472033679958325,0.9183399364630919,0.9610183558200983,0.7849363167963443,0.8683398537498153,0.16438035000735385,0.12625530133600293,0.7611060056138496,0.49080351442520964,0.704865537166189,0.03645565410461504,0.27927662240223283,0.6825957651529565,0.17726694671320165,0.17923192370251317,0.985548921235005,0.6104371475501849,0.5017966493662489,0.7682606230178253,0.16686463494717163,0.6781828196460414,0.1367421472470024,0.057448397709157994,0.7185696389804576,0.5112660041858821,0.8119296636056972,0.9065635138649414,0.6895415941603418,0.938931895518111,0.24842423151254356,0.7444268844487282,0.7694673285843362,0.590105670547157,0.03823973765291311,0.28895183985350226,0.815590246658259,0.8530347991660988,0.8562287127492282,0.6935218135260358,0.04753503420839855,0.9478558813821593,0.09387211025920295,0.6013853254494778,0.10060873624971689,0.17943941580765743,0.9594098254539548,0.42054754984688514,0.9237157222789465,0.34438242438077094,0.7082995170158711,0.7331256729732984,0.19758244188631147,0.5026795026270218,0.02034159256831547,0.9394962850895212,0.919452564097338,0.16613090576129996,0.7574443074279926,0.27558448361456267,0.08836040589760719,0.4750025550374338,0.9519963009971281,0.1307218828812753,0.061631118367026394,0.022212471321852334,0.42726592307235745,0.43555811342315154,0.7972555496887205,0.651492550843235,0.8315038552172762,0.5231540483318385,0.5007792969288747,0.8024602436361059,0.34378123242327663,0.33030362718959083,0.7978771088597113,0.4403203242288951,0.8752672159975381,0.44689878932562643,0.23740951590140114,0.6168857065481329,0.4762214277013964,0.3595557683784373,0.9963468687727143,0.24790512888249394,0.7634615205356436,0.6898267212415611,0.18651580476082097,0.29388719674487696,0.45154727377721626,0.42211337284041406,0.23080713599689062,0.5813091182472493,0.1917294605763794,0.4253989288514971,0.4091604132618183,0.8682992581475334,0.13820084590875947,0.39967353699191643,0.8901222955125585,0.6197632070819612,0.5021446494502992,0.3004207571036044,0.09253571589962895,0.31914646305345395,0.10120973069902317,0.03241067982887169,0.0695856766338967,0.9417939457843786,0.9067078861431576,0.018414808027022,0.5257273177567539,0.7930677435827947,0.07975378256587828,0.5029527296039682,0.8529149258745216,0.11961586962972848,0.340165222232822,0.12636127064200486,0.7253841877541594,0.006699111791003132,0.3152347202160286,0.19397980514950453,0.31659682218707863,0.4517108825417824,0.8320693711940197,0.36163532930371745,0.3084490458687109,0.4954245937126355,0.016364497162048464,0.300137692319982,0.35117636874426317,0.8491805573977783,0.7966680425065097,0.16225048782979679,0.2562593536974479,0.5228608383233674,0.549187183444748,0.698419196696988,0.25380583751487795,0.21859758477220415,0.6366283673206288,0.033704398078819975,0.7544017356838244,0.7026647539643153,0.47991071965953847,0.7384734524356885,0.5077296902535117,0.39141365684705054,0.7895514790270385,0.4390639793603902,0.5573441132483782,0.723737944495536,0.3524848719950714,0.22761682810554018,0.9347388352598336,0.9656844325825141,0.6546252817641416,0.7427504943919914,0.2865357893370831,0.14500267449808057,0.4444973837399667,0.4802250529053589,0.8767367655716342,0.4382037879031697,0.2857067741082209,0.2647569319247385,0.1263865708992119,0.19339817555381045,0.6115530259004062,0.07400195263177733,0.2755721783168221,0.6868331636797128,0.21853458121559455,0.2810784330716001,0.8680034738042189,0.37774388675857407,0.2183361493096827,0.49203110032471,0.8272697084007629,0.0786387396243261,0.08348607135006703,0.9878430716111275,0.014172831499861482,0.014504137355398683,0.8113678975688585,0.45490179016260723,0.5206947255725031,0.9615009884013426,0.17969585707346802,0.5188457319091927,0.1718362419181345,0.5361718476309769,0.5660616045242854,0.3111136947927541,0.330245666476215,0.8135048032392829,0.2742547150643464,0.4403806398613811,0.14805599030988426,0.049734464795267996,0.8515610110960132,0.19723694233759093,0.04189008920260806,0.29510953212202906,0.6347366218842622,0.21277073771507582,0.588539157246172,0.09248848790277786,0.8953239928926491,0.7548302632353948,0.5793078044137161,0.2852694156740391,0.9139084811085317,0.5413701100202863,0.4843497267197938,0.6707595565257598,0.53267175955075,0.5880062378423995,0.08404584931437753,0.9105007722788271,0.5122357033461196,0.9588402917591995,0.6407992054799038,0.10256406154497011,0.22855713959264645,0.921786166523268,0.012823381164731917,0.3640351865369028,0.4453598882204941,0.25959241587395354,0.9678838669281825,0.3756097748622501,0.4500108942968817,0.919893078421893,0.2111995799918135,0.2147185692965211,0.5026686286866996,0.02725308056851683,0.17651821272804957,0.3139772893196283,0.26328380704339427,0.596528627618883,0.05426947490433931,0.2720245419415117,0.8162584884883437,0.2684391832810463,0.7020951407202575,0.26258754135764817,0.5969830151178162,0.3463359376643048,0.5202006844551736,0.09413930485570465,0.1653229706006606,0.05206770840692121,0.5937080520548369,0.6456746537011198,0.8606184543561963,0.5060497913244222,0.9928251089619182,0.8610662430646212,0.5551356881159456,0.9468847107090825,0.16925296701868475,0.4514643178639446,0.9925841445772087,0.9287445202981286,0.650735526056785,0.13688707239062692,0.29374677359467316,0.04499906604952231,0.8578264652234551,0.33991301641094473,0.40899177063138337,0.46826433890454744,0.5473791353286698,0.22139441548569871,0.4777226113801185,0.7890605074994188,0.3457342186045079,0.6319556173809153,0.07472869354276523,0.9677383812055339,0.17637312897568036,0.7059719212432002,0.5750861785898123,0.15918457196776292,0.8263761156708975,0.38610488036396506,0.026320075656908082,0.8667183891861308,0.1437257468383243,0.32497907189824515,0.7884202078181755,0.6703625079974918,0.6441916259771726,0.4543828056996482,0.3993072022292693,0.9188951290674914,0.49858694563933825,0.44547936479913286,0.35919327499767484,0.792035025675792,0.6888111412340011,0.14182887992307258,0.5343891102125028,0.6227762191324424,0.4448890543136438,0.9943795595145641,0.7356283097111347,0.039481299181035934,0.1949404601010275,0.13970954738208197,0.03417229798360555,0.07429974984426735,0.62643865961583,0.24131317837102162,0.046782358235569865,0.04378172670664382,0.6384639843261957,0.14313045612282926,0.9732972975627954,0.2667576194659337,0.6778454055320604,0.04064105142106822,0.3718783220706574,0.5086288941956513,0.707644747430225,0.8461358674265662,0.14998045105538604,0.7793669477938395,0.751236984124361,0.24588649374856464,0.45890712541941936,0.04567873817536916,0.27620305803868295,0.8847115016810412,0.4010448819477015,0.9586752787935888,0.32956950551847997,0.13167976377477952,0.911801807366638,0.6194794125013802,0.5888421516796691,0.04970190939522545,0.18002550670517903,0.39749398789160095,0.48268376996446616,0.848951722677612,0.6999075651409694,0.5510884133412142,0.8222933265141886,0.44032036839386335,0.080722204518071,0.591338003128858,0.3529934936763167,0.5713970553015941,0.39220326535024486,0.9906580361608027,0.397108174982709,0.9463832348750211],"y":[0.15532838149189232,0.8870963002150216,0.26001333797142245,0.5745029842258035,0.5536078195713074,0.1471235835295135,0.167643599644011,0.15146902456984623,0.8795135054976807,0.725007558190439,0.7762615432842195,0.7121040399842331,0.7682928230343541,0.9157870191773227,0.017972966767748177,0.7098243076773313,0.9503002790654423,0.9398309661198558,0.5490707959982912,0.7776116120374144,0.17560682425768592,0.9028902559347608,0.8572079464958412,0.08020102761464654,0.213257028742171,0.2911779557649742,0.051387214853802377,0.27726632983463795,0.6763277308310661,0.32121252326465755,0.9346628547914916,0.09906028737115347,0.3926755627270121,0.8081041858489968,0.2421660948933979,0.13149667070093118,0.6212130691070692,0.3527268404647823,0.9905295614543463,0.17334268837337008,0.8552414314236942,0.45638142103732027,0.4342828928936888,0.03732412611516944,0.8846357688194708,0.18114986540756728,0.49786140602068396,0.3561371704120675,0.8890397663145451,0.6218803252016113,0.6236859088576199,0.5800685440724787,0.2696187772310292,0.5302097164789232,0.13546915312151997,0.8045654877765845,0.5736217660033665,0.31158314793981157,0.1754369069299394,0.37241046174905246,0.6795056022218703,0.6136311208785495,0.28931801932316004,0.3475465088032075,0.30876510155768877,0.584039245729693,0.029585437503583778,0.8596958845299707,0.8130483832541077,0.060740060334733115,0.7931339985950611,0.06260941994206948,0.5777525369226182,0.7058189704081018,0.16582884403705822,0.3878786642931664,0.892475388505765,0.5456515276697896,0.48589326271694655,0.5090030927544488,0.597912143973516,0.6392534625057131,0.6011085261474033,0.38509737160237845,0.009038260271900023,0.10166552125382677,0.4566211378277637,0.3171605592652601,0.36701915788271755,0.35631207855535685,0.775494909869512,0.22109665328411976,0.22829336899710073,0.4477100265091629,0.8600356549211227,0.7772378341051379,0.5575557376933666,0.25888090154221033,0.14562784948747776,0.5430401094085294,0.3764455781317172,0.8865436902613839,0.37112688179012177,0.16933666225670718,0.9054588599409858,0.9818236441415464,0.7339698497837339,0.3742133939790623,0.09651295272687621,0.6761989176729513,0.730952016892678,0.9259209210730077,0.6444696143253553,0.4595948431031869,0.48157249698668503,0.04770367872870451,0.11881178234387291,0.8453459142727456,0.23716898498722583,0.24818674930668294,0.9812934291562185,0.5853514323991981,0.537782380948724,0.048685388019311215,0.3964692215187082,0.9124770273846732,0.6283050955144103,0.8370290436021232,0.998471510500197,0.0012674866247821548,0.9634226227715171,0.4365527122075391,0.1116156502396991,0.2719497825048449,0.2212206620506607,0.6971822319140599,0.04201599059240102,0.8878056521228783,0.02059009727636707,0.01725445065445541,0.16178631301328872,0.5168173413987949,0.2086102824713748,0.31769665968043714,0.3666220625828396,0.8592165789968422,0.12388376207326168,0.5691960381619541,0.7505676156738564,0.46617593225065446,0.5260261419509983,0.5827394032532834,0.11342386650428726,0.4313247056061401,0.7795863722843318,0.8312649399062433,0.3539477002547371,0.6235141605359756,0.7260303318965566,0.0936500507976521,0.09600970557328736,0.8038488788603672,0.24868739974384524,0.14155895369953753,0.28690007390985983,0.37899926409252116,0.7078547022469821,0.9076115159117502,0.06339695707342918,0.769134539204643,0.4497742747612925,0.6766278222240579,0.5101646017634831,0.8156529244517686,0.892725817433796,0.9522703456275521,0.3638876987995807,0.8837072566422935,0.36426654216469445,0.8626353465499759,0.20765729649993014,0.8849374142482468,0.05240135896014342,0.8789472165787784,0.35151212465691684,0.07845523521784559,0.7325934851664271,0.8926169182411192,0.4093204855739029,0.9945913148099095,0.7037628554413049,0.551598587838806,0.8407802821286985,0.9842880047705015,0.6709953679070465,0.28840992143387034,0.7903439307269569,0.5085050720659254,0.1472968255035052,0.9029366493563211,0.4296395832875384,0.8641990065595874,0.9732234703797327,0.1619412058062054,0.28925863436345955,0.317263489643959,0.0765850978591075,0.6507696034525422,0.5245234253992285,0.7643626465139675,0.623950522707811,0.2612636209783583,0.39439834401909424,0.6177950633838167,0.7898966425599357,0.7086222705240046,0.6460470180527867,0.4200239276704024,0.47299596625917095,0.2699487786657596,0.8234125144728811,0.9634567752764139,0.6314565278673406,0.5225041893699025,0.00497411539058823,0.29369417974744905,0.4070497658335448,0.020636443536977245,0.7755167560787114,0.9057755172069409,0.13411822513717364,0.9636030615734998,0.1972646098549905,0.8098529533767667,0.03340558308868735,0.5185308672209948,0.07787383276239424,0.9920338814593422,0.23946894397624552,0.15624160676508603,0.7700880684599308,0.7980229971747929,0.6187719767655311,0.7142335633090958,0.7625192672693951,0.12748235815791098,0.11218940198762473,0.29855523055883315,0.5875655200572033,0.6960738447762208,0.38687974697564753,0.10093397825550265,0.8321425231255771,0.2671789964494431,0.696299932669908,0.05117723853711165,0.9649545247890817,0.5366094295412112,0.4228352157099292,0.37071355869022404,0.7860938659738995,0.2160378935768682,0.08843768968963184,0.2426372264839467,0.5340486192115834,0.6091521599519794,0.08391963624072085,0.012506126486223623,0.925182873663402,0.01788764762358852,0.3823820610627803,0.1037790151382132,0.2628686685809247,0.1726834206417427,0.7754609763346643,0.8383798965867432,0.055369814021538954,0.22554007838619317,0.23789340006689963,0.8425101223902803,0.3630305867394985,0.22031226340332755,0.9697842260465444,0.6880243246441732,0.033749118867868466,0.13527194173186585,0.687319504552647,0.40291991701727203,0.21221380467697093,0.5154484690356523,0.06329270515960528,0.787584330265173,0.46629029811724876,0.7940169958448046,0.36157524692348897,0.5624804945396975,0.8850933915738444,0.9583837907329925,0.42560496749048793,0.14222021432730236,0.8041941346248674,0.005029202743024541,0.8772172827897899,0.6883395085348927,0.2089115442525361,0.6376178251679782,0.1617713215677442,0.5800397910958893,0.31341151315643223,0.3020963614197163,0.8117599526189087,0.07241548698640066,0.6801560201397905,0.345362898498075,0.8614573620678244,0.2511884706119043,0.2807307687777153,0.8649377974974786,0.3909936045061948,0.2071471752129752,0.48345886753885847,0.005680267250713578,0.9794344156834434,0.08327548333816592,0.2704998527721635,0.5655478450006277,0.43625469645070825,0.8131415065161625,0.46693843256089884,0.8619946615762566,0.16121556069814313,0.6455252127891559,0.5920082315903907,0.9006537886235703,0.6100662845377919,0.4683049792173275,0.34958772975503494,0.16253159705857623,0.47309711531179766,0.999768249655649,0.2539056474693778,0.8918308316610817,0.9395060852689602,0.9585569649631189,0.2600761310998416,0.7492030042663839,0.20870262560158348,0.24752377830660133,0.5923058928431608,0.06464723564505281,0.5270668947040476,0.6787090235547206,0.7606995032025314,0.2966727669331648,0.7677829831715287,0.015506263341056536,0.22738498378547756,0.8501196295123055,0.8478111996799657,0.5159528088660986,0.0006563075229867321,0.4508166084757107,0.3438422531792825,0.36919314923420643,0.5205446715321466,0.4665508701058292,0.09467145213094008,0.8550008468936557,0.610652134740229,0.41405391071944886,0.5394998473683758,0.7533051332367552,0.38623481552732053,0.02492563927114655,0.00953493459885335,0.3040160976670321,0.21427092688203464,0.35301524006262863,0.9252266814023828,0.25829450715889835,0.5895685547185653,0.24256133676734137,0.4868046676681036,0.5588488619988901,0.8861796741957618,0.13679027408642885,0.9744924852262743,0.1291014137146561,0.9879199592106035,0.983153212705231,0.032972958485632864,0.08861699343328677,0.25447672248606124,0.9613698627500726,0.37387428486614127,0.9501142895865106,0.07845571592636102,0.6505319779116173,0.8238902836300039,0.8378845129787581,0.25771591002304006,0.12861003689273764,0.19410067043821677,0.23428976303410187,0.262652128100629,0.10170410848891787,0.5795330525898809,0.14541670581216082,0.22667451608986777,0.6660334290418543,0.18130785819818995,0.27068232293253214,0.1654814837236216,0.09936155239295008,0.5429912010442798,0.48890290316888174,0.22428125353517536,0.43316150721710023,0.3138905904944149,0.13533225128239001,0.3018536987913456,0.47723639630145476,0.3236316721532534,0.5318048057416135,0.3580370711618971,0.34747820498670823,0.989437650557295,0.5192519161565864,0.7585024175466043,0.10098919153862118,0.0759673129552344,0.32566404187692366,0.852762553130044,0.4873680593600914,0.20724102620408524,0.27145349194851187,0.6538834359923306,0.790344145059621,0.5411244087849155,0.3135056231014778,0.6179426452490906,0.8224680873181822,0.9989654682011965,0.7361493843230665,0.8310906751260195,0.21966011475299263,0.6454779277079682,0.6476750172310051,0.6977176622514398,0.23379207151997772,0.9480391124439947,0.14046577474756916,0.7995109237032553,0.7872102558362378,0.7124282179087026,0.8630832280956342,0.3790521945505897,0.07890198238323876,0.9910754803580005,0.4931690994046337,0.39727799938082453,0.8253137701096944,0.014107078407398221,0.6408274647699054,0.021392851595994022,0.041027500537530015,0.9686029003491641,0.3792237027295208,0.7429491223669771,0.6684943456765587,0.4194904509629622,0.7794806166831777,0.3491106229918527,0.6693492437955811,0.32510946254899675,0.8522422417895791,0.602122399604175,0.6765079682288001,0.3967878100042216,0.16063630813086693,0.8710066549549612,0.00899130207798493,0.6178848397743368,0.35575629536798514,0.4490346503739283,0.9741568698860522,0.7792594567012249,0.08105325032969124,0.23894939278965077,0.9993993986943778,0.5319827091499522,0.9069700814167257,0.15148407978164558,0.2720421701725956,0.04666856922854323,0.7866317825968876,0.5609505634200928,0.14244502784871516,0.7236764271014398,0.8514994731460805]}},"id":"1dab5763-183a-4581-b96b-f9c60995c15b","type":"ColumnDataSource"},{"attributes":{},"id":"c5ebc69d-098e-40c7-a132-99a99c2e32cd","type":"BasicTicker"},{"attributes":{"children":[{"id":"0cfe35c9-eca5-4a48-987c-a24802f89609","subtype":"Figure","type":"Plot"},{"id":"89ef3c1c-7fcb-42bf-b708-f82a9c2b17e1","subtype":"Figure","type":"Plot"}]},"id":"05925630-08e1-4f5a-9dc1-02c0efcf3193","type":"Row"},{"attributes":{},"id":"c3517610-0752-48c5-9ba2-e24e598b3646","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[],"y":[]}},"id":"95a218e4-b51c-437c-8a0b-a59bcdb472ff","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"f78d265e-fe62-4fd9-ba68-b67cfe0a582d","type":"Range1d"},{"attributes":{},"id":"ee12c820-323a-4bc2-8c51-2fa01245f4dd","type":"BasicTicker"},{"attributes":{"callback":null,"overlay":{"id":"584f8c7d-b4f6-4dee-b0bd-29bcc63fc6da","type":"PolyAnnotation"},"plot":{"id":"0cfe35c9-eca5-4a48-987c-a24802f89609","subtype":"Figure","type":"Plot"}},"id":"9e3edc74-e4f0-4b07-8cd1-74aaa12eb8b5","type":"LassoSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"0cfe35c9-eca5-4a48-987c-a24802f89609","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5ebc69d-098e-40c7-a132-99a99c2e32cd","type":"BasicTicker"}},"id":"d3284a11-4e40-44a1-b912-ad5e193f7f2d","type":"Grid"},{"attributes":{"plot":{"id":"0cfe35c9-eca5-4a48-987c-a24802f89609","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee12c820-323a-4bc2-8c51-2fa01245f4dd","type":"BasicTicker"}},"id":"74ef3c3c-78ef-4c48-8242-7f3d772ae9e1","type":"Grid"},{"attributes":{"data_source":{"id":"1dab5763-183a-4581-b96b-f9c60995c15b","type":"ColumnDataSource"},"glyph":{"id":"5dadd474-bdd5-420d-901a-20b1957d0589","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"d1c4187c-a4b0-471e-83a7-531824765242","type":"Circle"},"selection_glyph":null},"id":"68af629c-139b-4d23-b783-bb935b35f67a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"89ef3c1c-7fcb-42bf-b708-f82a9c2b17e1","subtype":"Figure","type":"Plot"},"ticker":{"id":"d7cd493d-2d7d-4620-a97f-ba19fb48fa8b","type":"BasicTicker"}},"id":"5219355e-cab0-4141-9c80-89a072aecf2d","type":"Grid"},{"attributes":{"plot":null,"text":"Watch Here"},"id":"0e253b91-3e3e-4e95-b0ea-83686f6eddc5","type":"Title"},{"attributes":{"formatter":{"id":"f586fe47-fd72-4957-bb50-5b1ca291dc77","type":"BasicTickFormatter"},"plot":{"id":"0cfe35c9-eca5-4a48-987c-a24802f89609","subtype":"Figure","type":"Plot"},"ticker":{"id":"ee12c820-323a-4bc2-8c51-2fa01245f4dd","type":"BasicTicker"}},"id":"4bde1e75-9767-4d54-8e83-9d21b90540d8","type":"LinearAxis"},{"attributes":{"callback":null},"id":"00c75e70-8722-4a05-861b-b9c8918b0420","type":"Range1d"}],"root_ids":["05925630-08e1-4f5a-9dc1-02c0efcf3193"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"63a14fde-4800-45d5-b02a-67def219a349","elementid":"96255c34-9fdd-4770-ad82-8a90c34f64d6","modelid":"05925630-08e1-4f5a-9dc1-02c0efcf3193"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
