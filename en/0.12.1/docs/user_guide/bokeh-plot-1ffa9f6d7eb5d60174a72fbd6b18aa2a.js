document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("91f89755-1838-490e-a934-cf9963d12a47");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91f89755-1838-490e-a934-cf9963d12a47' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
          (function outer(modules, cache, entry) {
            if (typeof Bokeh !== "undefined") {
              for (var name in modules) {
                var module = modules[name];
          
                if (typeof(module) === "string") {
                  try {
                    coffee = Bokeh.require("coffee-script")
                  } catch (e) {
                    throw new Error("Compiler requested but failed to import. Make sure bokeh-compiler(-min).js was included.")
                  }
          
                  function compile(code) {
                    var body = coffee.compile(code, {bare: true, shiftLine: true});
                    return new Function("require", "module", "exports", body);
                  }
          
                  modules[name] = [compile(module), {}];
                }
              }
          
              for (var name in modules) {
                Bokeh.require.modules[name] = modules[name];
              }
          
              for (var i = 0; i < entry.length; i++) {
                Bokeh.Models.register_locations(Bokeh.require(entry[i]));
              }
            } else {
              throw new Error("Cannot find Bokeh. You have to load it prior to loading plugins.");
            }
          })({
           "custom/main":[function(require,module,exports){
             module.exports = { Custom: require("custom/custom"),
          DrawTool: require("custom/draw_tool"),
          MyFormatter: require("custom/my_formatter"),
          Surface3d: require("custom/surface3d") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n",
          "custom/surface3d": "\n# This file contains the JavaScript (CoffeeScript) implementation\n# for a Bokeh custom extension. The \"surface3d.py\" contains the\n# python counterpart.\n#\n# This custom model wraps one part of the third-party vis.js library:\n#\n#     http://visjs.org/index.html\n#\n# Making it easy to hook up python data analytics tools (NumPy, SciPy,\n# Pandas, etc.) to web presentations using the Bokeh server.\n\n# These \"require\" lines are similar to python \"import\" statements\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\n# This defines some default options for the Graph3d feature of vis.js\n# See: http://visjs.org/graph3d_examples.html for more details.\nOPTIONS =\n  width:  \'600px\'\n  height: \'600px\'\n  style: \'surface\'\n  showPerspective: true\n  showGrid: true\n  keepAspectRatio: true\n  verticalRatio: 1.0\n  legendLabel: \'stuff\'\n  cameraPosition:\n    horizontal: -0.35\n    vertical: 0.22\n    distance: 1.8\n\n# To create custom model extensions that will render on to the HTML canvas\n# or into the DOM, we must create a View subclass for the model. Currently\n# Bokeh models and views are based on BackBone. More information about\n# using Backbone can be found here:\n#\n#     http://backbonejs.org/\n#\n# In this case we will subclass from the existing BokehJS ``LayoutDOM.View``,\n# corresponding to our\nclass Surface3dView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    url = \"https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js\"\n    $.getScript(url).done(@_init)\n\n  # NOTE: we have to use the \"fat arrow\" => here so that \"this\" is bound correctly\n  _init: () =>\n    # Create a new Graph3s using the vis.js API. This assumes the vis.js has\n    # already been loaded (e.g. in a custom app template). In the future Bokeh\n    # models will be able to specify and load external scripts automatically.\n    #\n    # Backbone Views create <div> elements by default, accessible as @$el. Many\n    # Bokeh views ignore this default <div>, and instead do things like draw\n    # to the HTML canvas. In this case though, we use the <div> to attach a\n    # Graph3d to the DOM.\n    @_graph = new vis.Graph3d(@$el[0], @get_data(), OPTIONS)\n\n    # Set Backbone listener so that when the Bokeh data source has a change\n    # event, we can process the new data\n    @listenTo(@model.data_source, \'change\', () =>\n        @_graph.setData(@get_data())\n    )\n\n  # This is the callback executed when the Bokeh data has an change. Its basic\n  # function is to adapt the Bokeh data source to the vis.js DataSet format.\n  get_data: () ->\n    data = new vis.DataSet()\n    source = @model.data_source\n    for i in [0...source.get_length()]\n      data.add({\n        x:     source.get_column(@model.x)[i]\n        y:     source.get_column(@model.y)[i]\n        z:     source.get_column(@model.z)[i]\n        style: source.get_column(@model.color)[i]\n      })\n    return data\n\n# We must also create a corresponding JavaScript Backbone model sublcass to\n# correspond to the python Bokeh model subclass. In this case, since we want\n# an element that can position itself in the DOM according to a Bokeh layout,\n# we subclass from ``LayoutDOM.model``\nclass Surface3d extends LayoutDOM.Model\n\n  # This is usually boilerplate. In some cases there may not be a view.\n  default_view: Surface3dView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Surface3d\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. ``bokeh.core.properties.String`` will be\n  # ``p.String`` in the JS implementatin. Where the JS type system is not yet\n  # as rich, you can use ``p.Any`` as a \"wildcard\" property type.\n  @define {\n    x:           [ p.String           ]\n    y:           [ p.String           ]\n    z:           [ p.String           ]\n    color:       [ p.String           ]\n    data_source: [ p.Instance         ]\n  }\n\n# This is boilerplate. Every implementation should \"export\" a ``Model``\n# and (when applicable) also a ``View``.\nmodule.exports =\n  Model: Surface3d\n  View: Surface3dView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6c0acf0b-e1a5-484f-85e4-fcb1c5dee0a0":{"roots":{"references":[{"attributes":{"callback":null},"id":"593d8b29-7dc7-4705-ab33-889270e25168","type":"DataRange1d"},{"attributes":{},"id":"fcaa4fae-fd64-41a1-ae03-8c3feb339b45","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"c87e14b6-d62a-4afe-94a3-1724887e3866","subtype":"Figure","type":"Plot"},"ticker":{"id":"68248b30-19dc-4d6b-9827-8dc54fc969dd","type":"BasicTicker"}},"id":"f8151d43-f3c9-4794-afbd-2c53e4fcf51a","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"b446ddb6-a756-4cd6-aad5-fc1f214d259a","type":"Circle"},{"attributes":{},"id":"6a425571-7326-42c2-8e38-2d3238a1598d","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"11a03e9c-c36a-480a-a7b8-ace59a09d088","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3bca2c80-cbc1-4865-9956-054574f863b2","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"3bca2c80-cbc1-4865-9956-054574f863b2","type":"BoxAnnotation"},"plot":{"id":"c87e14b6-d62a-4afe-94a3-1724887e3866","subtype":"Figure","type":"Plot"},"renderers":[{"id":"498a235f-1177-449f-bd5f-979dfee0ed6e","type":"GlyphRenderer"}]},"id":"89d102f2-e64e-47aa-8742-8a3e806395a0","type":"BoxSelectTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.8523425812566489,0.8383281350788413,0.38111150642920677,0.9435886068655259,0.305035221620126,0.3005336533329085,0.9982266878568247,0.1511710287851321,0.35163393156533673,0.43933954564570565,0.013117270786924595,0.06809313429813535,0.3669896922743815,0.7289568605152293,0.827187513921958,0.3732584448202936,0.09337621717625988,0.9591393912313201,0.12608336470124426,0.9501601063002462,0.6073515911518185,0.23405469566087422,0.9898187600172311,0.7262860722097088,0.05125552192562943,0.28457003869977726,0.5993290489773174,0.3610959140162404,0.6717424368110785,0.11045383489337712,0.09748857891632601,0.26523913343851346,0.9479778129651258,0.27773492501107533,0.06483113385999995,0.8418134455156233,0.09501314005490391,0.06010610758090684,0.5081172738359865,0.9130686665134886,0.7418114765663548,0.5477972648403071,0.21149582821414326,0.8877680942137184,0.9305106877460945,0.40495340935904967,0.12325465118487111,0.8546565160550649,0.3414184257485865,0.42719203908632053,0.2891014759626178,0.5617117091033473,0.6546049626178875,0.6328296722369297,0.3766189413605048,0.20615801133733735,0.9192679606742578,0.8576634196688652,0.9263819459983955,0.08538740788362276,0.19402277220225983,0.4691971294905287,0.28435041363720104,0.8240480263985607,0.8169634071017687,0.9065668276487702,0.873040905879298,0.3157121372153133,0.5270416341528898,0.7179293371412172,0.5648248833847823,0.2814436245660309,0.6545447125258458,0.727943362352216,0.997299070255735,0.5770678603189501,0.4178627414245547,0.02137372896162082,0.5790489349801188,0.9074207005062647,0.6692133177218169,0.7876504859091956,0.0784684898654675,0.3270994622504748,0.507265096227786,0.9587783848840616,0.8573190779183014,0.3997172248170674,0.4498908476480812,0.7116236251490091,0.3261756409063018,0.5589489208222307,0.464646728333005,0.845807127728503,0.030813874636006378,0.2134577541703191,0.6663983655934236,0.1493902181656882,0.6625018094547868,0.9864780017408364,0.8504714263098982,0.8643061469847295,0.952331424937602,0.27740016542967905,0.8626153394035561,0.9479492020253607,0.7863401710793145,0.10603199577759503,0.6894599467359726,0.6501697135122789,0.4223228425771174,0.19680694936113508,0.5050170418471722,0.6128858352649,0.8603938373027217,0.21008143059107298,0.8251907927437977,0.11632125047910291,0.6569854555038545,0.5664269629822165,0.043761366946037605,0.359688169135684,0.07576777422939207,0.5530825294288283,0.8135307713505062,0.23003335867757524,0.5312462572297104,0.5462553963017244,0.4491693748849427,0.4646301116747512,0.05543222249603186,0.15725179989915739,0.2007200755437274,0.8986463174254472,0.3050040360047641,0.4720374245921284,0.0888494313857533,0.4912568669773152,0.1979561231412127,0.14114537411461747,0.444366880227989,0.34699386293740775,0.3004219927582068,0.6854625750941681,0.6539406737999472,0.757699099815749,0.1929057710460388,0.6638916559770652,0.4126463937194016,0.05853151512210786,0.5958308675994083,0.8333902751374407,0.1608167271089328,0.6481205413836169,0.57251662353958,0.8933241175047008,0.7255390630928872,0.5492136360159775,0.6627783890165643,0.3996248647936772,0.1677871556632894,0.4985125090990171,0.5615416352904201,0.31216767642100696,0.8790240186631191,0.9073005155326251,0.2738782291880687,0.8285583788937227,0.06725430661684462,0.8516015742198185,0.49698997461010785,0.8878246800677223,0.8236410946831046,0.24702028241569818,0.15402940653392005,0.9789469180520465,0.08003679330066915,0.3271903369970288,0.27579143727657895,0.44129065305751314,0.9623126807054486,0.7037096263600934,0.7364403903175134,0.828351837341904,0.5330608743928142,0.8006973651150708,0.7257118092410164,0.6268166852774328,0.016978329785511836,0.7606339203844517,0.9325168897076832,0.5111108674915874,0.05539856062417714,0.3207680477119884,0.5961032054742618,0.18703689823932712,0.1353192114646249,0.6070309072341886,0.8053240427512613,0.27764121436586897],"y":[0.6389641937707468,0.4915898215903459,0.9996274731079299,0.959820992979807,0.670487488546023,0.6933325414517315,0.8541069387569176,0.8337171887170456,0.5272664139544677,0.005027773247047063,0.6303882578957648,0.6011028598334904,0.822922440570308,0.18735354550260586,0.6246554389659252,0.11610363634098886,0.1532510686812414,0.06956966894302752,0.6076940719678613,0.8080028833736936,0.9093137387599265,0.3868208705115481,0.3205765243409826,0.9354574468495865,0.48061953895523013,0.6019470149439116,0.9082454993622305,0.28465429932682074,0.43274673910492556,0.4707444856552252,0.5932476706645526,0.7316149199306196,0.02562769182496738,0.8914040166170228,0.35466449829562696,0.9955697586581929,0.9143443225708544,0.6495126053253268,0.1775253262574562,0.0649809356311718,0.1089726747422457,0.3565921247056868,0.42739749421823636,0.6079370263087398,0.8512705212090832,0.6185783741991221,0.14548908061679922,0.08301855659883373,0.09870497690789526,0.8533459366893218,0.24799878388371654,0.9617578565455938,0.8480677811386211,0.1258882834549072,0.7574706187671236,0.9408510125965819,0.44107800177335554,0.737322546540283,0.15064936152896058,0.7737285219989639,0.9898415077799774,0.839301682801469,0.4541934879870133,0.6195410250264131,0.14062968080927696,0.9049324061594987,0.6111534064354482,0.7693903975767353,0.304289652056668,0.0935251479258199,0.06135651059943903,0.64955433024184,0.2278661674426491,0.7407181409981322,0.9653604347433916,0.0535407185166108,0.5597016150945162,0.518954197555374,0.5054777666536621,0.32456062193802404,0.48196069218022597,0.9834203063934011,0.4054143505501495,0.6718186627012528,0.8759798914369022,0.13573366913981633,0.1361212508590649,0.6584085854548178,0.2558487671343951,0.923517119452789,0.4145687830825814,0.23379373945995696,0.2637117306018545,0.7875066068488592,0.062085945849037594,0.8492404917651862,0.5695207089421369,0.9720882227522799,0.45937441184472394,0.5924020139621454,0.5484491224003852,0.7853819494631592,0.31875089948922775,0.7956786554965544,0.8655547647699944,0.03821359850075279,0.4608336427599766,0.5463839294009658,0.8661654977026672,0.13827274162849623,0.11340204560864198,0.8041382912021618,0.8083838384341938,0.5448905072019835,0.4924602861179971,0.16334351903969457,0.06134640571467398,0.29580108134888117,0.05025978212034221,0.9285453082772241,0.1851439368875749,0.6199846422829904,0.7614989749235404,0.38901747476013215,0.8176933738245205,0.46918942073958025,0.6876342044291266,0.07289889384080916,0.7949723275338044,0.21075741393274172,0.46086936367694853,0.32354583844168916,0.7815928525234519,0.885932188983782,0.851853262641791,0.4391971518922857,0.5266633087716849,0.21485659639871468,0.49918536723612406,0.8095535138487824,0.3696879296007479,0.5926531168302158,0.9996299251336185,0.6207074006565015,0.9592972393923648,0.44889329449748516,0.7537046334932581,0.35597796239399315,0.23397762655873888,0.15231299398500164,0.7523259818235556,0.012528946819893916,0.30868969669693247,0.8682438475350291,0.30124546687868115,0.6000083284038402,0.8485276740874645,0.4191078836615588,0.21584688467138613,0.9202194605203173,0.5066376897649124,0.47635004165779304,0.905543737116366,0.8539889327623365,0.7908348381828687,0.4654246673873459,0.6805776765070659,0.2657329116163548,0.4499905177588752,0.917623250051096,0.801518896854024,0.7690166601167675,0.9629942745211706,0.8926740266356386,0.23647024232510372,0.16746342501131206,0.3055450588279013,0.5447136269315813,0.2573149581173706,0.24290014851278763,0.9803919511634968,0.516368955188974,0.3643020227924355,0.48101793504926427,0.6194837207877372,0.5961718653882401,0.3427976868067385,0.7152137315032333,0.8691628422175557,0.03397235490113737,0.60106142593655,0.6934576323120869,0.36528140787037766,0.6207091588479196,0.6185161018397423,0.5381672271961164,0.8717801540953724,0.09879494041135595,0.9766656279262095,0.33551853711257595]}},"id":"b18a8b5e-3e94-40e9-ab19-69dd9698f129","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c87e14b6-d62a-4afe-94a3-1724887e3866","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcaa4fae-fd64-41a1-ae03-8c3feb339b45","type":"BasicTicker"}},"id":"3f647159-402a-49ff-8c29-c000cff2add8","type":"Grid"},{"attributes":{"overlay":{"id":"11a03e9c-c36a-480a-a7b8-ace59a09d088","type":"BoxAnnotation"},"plot":{"id":"c87e14b6-d62a-4afe-94a3-1724887e3866","subtype":"Figure","type":"Plot"}},"id":"32f10d15-e4fd-4b05-9a2a-1f3fb3aa8016","type":"BoxZoomTool"},{"attributes":{},"id":"4175f75b-49ad-4f4e-b439-29c5cca6a45c","type":"ToolEvents"},{"attributes":{},"id":"68248b30-19dc-4d6b-9827-8dc54fc969dd","type":"BasicTicker"},{"attributes":{},"id":"17bedc71-bfd7-4434-93cc-a5a530a4c0e7","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"d88f0af0-5b8f-4ccd-ab12-dd57fcf10ef6","type":"PolyAnnotation"},{"attributes":{"formatter":{"id":"6a425571-7326-42c2-8e38-2d3238a1598d","type":"BasicTickFormatter"},"plot":{"id":"c87e14b6-d62a-4afe-94a3-1724887e3866","subtype":"Figure","type":"Plot"},"ticker":{"id":"68248b30-19dc-4d6b-9827-8dc54fc969dd","type":"BasicTicker"}},"id":"0286b98b-9ad0-4069-9fc0-4290e92bd81d","type":"LinearAxis"},{"attributes":{"below":[{"id":"8736af58-3c43-4e99-9c85-48158b4f61d3","type":"LinearAxis"}],"left":[{"id":"0286b98b-9ad0-4069-9fc0-4290e92bd81d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8736af58-3c43-4e99-9c85-48158b4f61d3","type":"LinearAxis"},{"id":"3f647159-402a-49ff-8c29-c000cff2add8","type":"Grid"},{"id":"0286b98b-9ad0-4069-9fc0-4290e92bd81d","type":"LinearAxis"},{"id":"f8151d43-f3c9-4794-afbd-2c53e4fcf51a","type":"Grid"},{"id":"3bca2c80-cbc1-4865-9956-054574f863b2","type":"BoxAnnotation"},{"id":"11a03e9c-c36a-480a-a7b8-ace59a09d088","type":"BoxAnnotation"},{"id":"d88f0af0-5b8f-4ccd-ab12-dd57fcf10ef6","type":"PolyAnnotation"},{"id":"498a235f-1177-449f-bd5f-979dfee0ed6e","type":"GlyphRenderer"}],"title":{"id":"88e1f246-7d80-4e41-b6ac-753583b6cf8d","type":"Title"},"tool_events":{"id":"4175f75b-49ad-4f4e-b439-29c5cca6a45c","type":"ToolEvents"},"toolbar":{"id":"9e354060-5fc8-4ca7-92e5-418daf0d83dc","type":"Toolbar"},"x_range":{"id":"a43453f2-6ad0-40d4-9f9f-f49261199a5c","type":"DataRange1d"},"y_range":{"id":"593d8b29-7dc7-4705-ab33-889270e25168","type":"DataRange1d"}},"id":"c87e14b6-d62a-4afe-94a3-1724887e3866","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"88e1f246-7d80-4e41-b6ac-753583b6cf8d","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"89d102f2-e64e-47aa-8742-8a3e806395a0","type":"BoxSelectTool"},{"id":"32f10d15-e4fd-4b05-9a2a-1f3fb3aa8016","type":"BoxZoomTool"},{"id":"93245339-fd1c-40a6-b659-88be7f60a748","type":"LassoSelectTool"},{"id":"3b36c31d-4994-4be8-a4db-620c7828c637","type":"ResetTool"}]},"id":"9e354060-5fc8-4ca7-92e5-418daf0d83dc","type":"Toolbar"},{"attributes":{"callback":null},"id":"a43453f2-6ad0-40d4-9f9f-f49261199a5c","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b18a8b5e-3e94-40e9-ab19-69dd9698f129","type":"ColumnDataSource"},"glyph":{"id":"b446ddb6-a756-4cd6-aad5-fc1f214d259a","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"45f9bc7f-07e5-470e-9285-a53ba997c94e","type":"Circle"},"selection_glyph":null},"id":"498a235f-1177-449f-bd5f-979dfee0ed6e","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"d88f0af0-5b8f-4ccd-ab12-dd57fcf10ef6","type":"PolyAnnotation"},"plot":{"id":"c87e14b6-d62a-4afe-94a3-1724887e3866","subtype":"Figure","type":"Plot"}},"id":"93245339-fd1c-40a6-b659-88be7f60a748","type":"LassoSelectTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"45f9bc7f-07e5-470e-9285-a53ba997c94e","type":"Circle"},{"attributes":{"formatter":{"id":"17bedc71-bfd7-4434-93cc-a5a530a4c0e7","type":"BasicTickFormatter"},"plot":{"id":"c87e14b6-d62a-4afe-94a3-1724887e3866","subtype":"Figure","type":"Plot"},"ticker":{"id":"fcaa4fae-fd64-41a1-ae03-8c3feb339b45","type":"BasicTicker"}},"id":"8736af58-3c43-4e99-9c85-48158b4f61d3","type":"LinearAxis"},{"attributes":{"plot":{"id":"c87e14b6-d62a-4afe-94a3-1724887e3866","subtype":"Figure","type":"Plot"}},"id":"3b36c31d-4994-4be8-a4db-620c7828c637","type":"ResetTool"}],"root_ids":["c87e14b6-d62a-4afe-94a3-1724887e3866"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"6c0acf0b-e1a5-484f-85e4-fcb1c5dee0a0","elementid":"91f89755-1838-490e-a934-cf9963d12a47","modelid":"c87e14b6-d62a-4afe-94a3-1724887e3866"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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
});