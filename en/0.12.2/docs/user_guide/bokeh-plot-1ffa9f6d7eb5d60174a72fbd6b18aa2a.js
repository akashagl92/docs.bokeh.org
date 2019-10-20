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
      };var element = document.getElementById("f3455e62-2b5c-45d2-98b4-acc123d3ee7d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f3455e62-2b5c-45d2-98b4-acc123d3ee7d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js'];
    
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
          LatexLabel: require("custom/latex_label"),
          MyFormatter: require("custom/my_formatter"),
          Surface3d: require("custom/surface3d") };
           }, {}],
           "custom/custom": "\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\nclass CustomView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    @render()\n\n    # Set Backbone listener so that when the Bokeh slider has a change\n    # event, we can process the new data\n    @listenTo(@model.slider, \'change\', () => @render())\n\n  render: () ->\n    # Backbone Views create <div> elements by default, accessible as @$el.\n    # Many Bokeh views ignore this default <div>, and instead do things\n    # like draw to the HTML canvas. In this case though, we change the\n    # contents of the <div>, based on the current slider value.\n    @$el.html(\"<h1>#{ @model.text }: #{ @model.slider.value }</h1>\")\n    @$(\'h1\').css({ \'color\': \'#686d8e\', \'background-color\': \'#2a3153\' })\n\nclass Custom extends LayoutDOM.Model\n\n  # If there is an associated view, this is boilerplate.\n  default_view: CustomView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Custom\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. bokeh.core.properties.String will be\n  # p.String in the JS implementation. Where the JS type system is not yet\n  # as rich, you can use p.Any as a \"wildcard\" property type.\n  @define {\n    text:   [ p.String ]\n    slider: [ p.Any    ]\n  }\n\n# This is boilerplate. Every implementation should export a Model\n# and (when applicable) also a View.\nmodule.exports =\n  Model: Custom\n  View: CustomView\n",
          "custom/draw_tool": "\np = require \"core/properties\"\nGestureTool = require \"models/tools/gestures/gesture_tool\"\n\nclass DrawToolView extends GestureTool.View\n\n  # this is executed when the pan/drag event starts\n  _pan_start: (e) ->\n    @model.source.data = {x: [], y: []}\n\n  # this is executed on subsequent mouse/touch moves\n  _pan: (e) ->\n    frame = @plot_model.frame\n    canvas = @plot_view.canvas\n\n    vx = canvas.sx_to_vx(e.bokeh.sx)\n    vy = canvas.sy_to_vy(e.bokeh.sy)\n    if not frame.contains(vx, vy)\n      return null\n\n    x = frame.get(\'x_mappers\').default.map_from_target(vx)\n    y = frame.get(\'y_mappers\').default.map_from_target(vy)\n\n    @model.source.data.x.push(x)\n    @model.source.data.y.push(y)\n    @model.source.trigger(\'change\')\n\n  # this is executed then the pan/drag ends\n  _pan_end: (e) -> return null\n\nclass DrawTool extends GestureTool.Model\n  default_view: DrawToolView\n  type: \"DrawTool\"\n\n  tool_name: \"Drag Span\"\n  icon: \"bk-tool-icon-lasso-select\"\n  event_type: \"pan\"\n  default_order: 12\n\n  @define { source: [ p.Instance ] }\n\nmodule.exports =\n  Model: DrawTool\n  View: DrawToolView\n",
          "custom/latex_label": "\nLabel = require \"models/annotations/label\"\n\nclass LatexLabelView extends Label.View\n  render: () ->\n\n    #--- Start of copied section from ``Label.render`` implementation\n\n    ctx = @plot_view.canvas_view.ctx\n\n    # Here because AngleSpec does units tranform and label doesn\'t support specs\n    switch @mget(\'angle_units\')\n      when \"rad\" then angle = -1 * @mget(\'angle\')\n      when \"deg\" then angle = -1 * @mget(\'angle\') * Math.PI/180.0\n\n    if @mget(\'x_units\') == \"data\"\n      vx = @xmapper.map_to_target(@mget(\'x\'))\n    else\n      vx = @mget(\'x\')\n    sx = @canvas.vx_to_sx(vx)\n\n    if @mget(\'y_units\') == \"data\"\n      vy = @ymapper.map_to_target(@mget(\'y\'))\n    else\n      vy = @mget(\'y\')\n    sy = @canvas.vy_to_sy(vy)\n\n    if @model.panel?\n      panel_offset = @_get_panel_offset()\n      sx += panel_offset.x\n      sy += panel_offset.y\n\n    #--- End of copied section from ``Label.render`` implementation\n\n    # ``katex`` is loaded into the global window at runtime\n    # katex.renderToString returns a html ``span`` element\n    latex = katex.renderToString(@mget(\'text\'), {displayMode: true})\n\n    # Must render as superpositioned div (not on canvas) so that KaTex\n    # css can properly style the text\n    @_css_text(ctx, latex, sx + @mget(\'x_offset\'), sy - @mget(\'y_offset\'), angle)\n\nclass LatexLabel extends Label.Model\n  type: \'LatexLabel\'\n  default_view: LatexLabelView\n\nmodule.exports =\n  Model: LatexLabel\n  View: LatexLabelView\n",
          "custom/my_formatter": "\nTickFormatter = require \"models/formatters/tick_formatter\"\n\nclass MyFormatter extends TickFormatter.Model\n  type: \"MyFormatter\"\n\n  # TickFormatters should implement this method, which accepts a lisst\n  # of numbers (ticks) and returns a list of strings\n  doFormat: (ticks) ->\n    # format the first tick as-is\n    formatted = [\"#{ticks[0]}\"]\n\n    # format the remaining ticks as a difference from the first\n    for i in [1...ticks.length]\n       formatted.push(\"+#{(ticks[i]-ticks[0]).toPrecision(2)}\")\n\n    return formatted\n\nmodule.exports =\n  Model: MyFormatter\n",
          "custom/surface3d": "\n# This file contains the JavaScript (CoffeeScript) implementation\n# for a Bokeh custom extension. The \"surface3d.py\" contains the\n# python counterpart.\n#\n# This custom model wraps one part of the third-party vis.js library:\n#\n#     http://visjs.org/index.html\n#\n# Making it easy to hook up python data analytics tools (NumPy, SciPy,\n# Pandas, etc.) to web presentations using the Bokeh server.\n\n# These \"require\" lines are similar to python \"import\" statements\n_ = require \"underscore\"\n$ = require \"jquery\"\n\np = require \"core/properties\"\nLayoutDOM = require \"models/layouts/layout_dom\"\n\n# This defines some default options for the Graph3d feature of vis.js\n# See: http://visjs.org/graph3d_examples.html for more details.\nOPTIONS =\n  width:  \'600px\'\n  height: \'600px\'\n  style: \'surface\'\n  showPerspective: true\n  showGrid: true\n  keepAspectRatio: true\n  verticalRatio: 1.0\n  legendLabel: \'stuff\'\n  cameraPosition:\n    horizontal: -0.35\n    vertical: 0.22\n    distance: 1.8\n\n# To create custom model extensions that will render on to the HTML canvas\n# or into the DOM, we must create a View subclass for the model. Currently\n# Bokeh models and views are based on BackBone. More information about\n# using Backbone can be found here:\n#\n#     http://backbonejs.org/\n#\n# In this case we will subclass from the existing BokehJS ``LayoutDOM.View``,\n# corresponding to our\nclass Surface3dView extends LayoutDOM.View\n\n  initialize: (options) ->\n    super(options)\n\n    url = \"https://cdnjs.cloudflare.com/ajax/libs/vis/4.16.1/vis.min.js\"\n    $.getScript(url).done(@_init)\n\n  # NOTE: we have to use the \"fat arrow\" => here so that \"this\" is bound correctly\n  _init: () =>\n    # Create a new Graph3s using the vis.js API. This assumes the vis.js has\n    # already been loaded (e.g. in a custom app template). In the future Bokeh\n    # models will be able to specify and load external scripts automatically.\n    #\n    # Backbone Views create <div> elements by default, accessible as @$el. Many\n    # Bokeh views ignore this default <div>, and instead do things like draw\n    # to the HTML canvas. In this case though, we use the <div> to attach a\n    # Graph3d to the DOM.\n    @_graph = new vis.Graph3d(@$el[0], @get_data(), OPTIONS)\n\n    # Set Backbone listener so that when the Bokeh data source has a change\n    # event, we can process the new data\n    @listenTo(@model.data_source, \'change\', () =>\n        @_graph.setData(@get_data())\n    )\n\n  # This is the callback executed when the Bokeh data has an change. Its basic\n  # function is to adapt the Bokeh data source to the vis.js DataSet format.\n  get_data: () ->\n    data = new vis.DataSet()\n    source = @model.data_source\n    for i in [0...source.get_length()]\n      data.add({\n        x:     source.get_column(@model.x)[i]\n        y:     source.get_column(@model.y)[i]\n        z:     source.get_column(@model.z)[i]\n        style: source.get_column(@model.color)[i]\n      })\n    return data\n\n# We must also create a corresponding JavaScript Backbone model sublcass to\n# correspond to the python Bokeh model subclass. In this case, since we want\n# an element that can position itself in the DOM according to a Bokeh layout,\n# we subclass from ``LayoutDOM.model``\nclass Surface3d extends LayoutDOM.Model\n\n  # This is usually boilerplate. In some cases there may not be a view.\n  default_view: Surface3dView\n\n  # The ``type`` class attribute should generally match exactly the name\n  # of the corresponding Python class.\n  type: \"Surface3d\"\n\n  # The @define block adds corresponding \"properties\" to the JS model. These\n  # should basically line up 1-1 with the Python model class. Most property\n  # types have counterparts, e.g. ``bokeh.core.properties.String`` will be\n  # ``p.String`` in the JS implementatin. Where the JS type system is not yet\n  # as rich, you can use ``p.Any`` as a \"wildcard\" property type.\n  @define {\n    x:           [ p.String           ]\n    y:           [ p.String           ]\n    z:           [ p.String           ]\n    color:       [ p.String           ]\n    data_source: [ p.Instance         ]\n  }\n\n# This is boilerplate. Every implementation should \"export\" a ``Model``\n# and (when applicable) also a ``View``.\nmodule.exports =\n  Model: Surface3d\n  View: Surface3dView\n"
          }, {}, ["custom/main"]);
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"6ad9c0cb-f07e-40cb-b913-204b027f2c7b":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"d0aeab9b-1068-49b0-918c-235a3791611f","type":"PolyAnnotation"},"plot":{"id":"8767d3d2-c310-418e-ba7b-28765bb2d8b7","subtype":"Figure","type":"Plot"}},"id":"572093ce-018c-437b-9d6e-34f538b494d5","type":"LassoSelectTool"},{"attributes":{"dimension":1,"plot":{"id":"8767d3d2-c310-418e-ba7b-28765bb2d8b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2da6313b-af6c-4a61-8b7e-a44d231845e0","type":"BasicTicker"}},"id":"166231ae-57da-4800-92d3-01fe206a323c","type":"Grid"},{"attributes":{},"id":"66124404-9415-4b4f-b212-ecd446a6c6b6","type":"BasicTickFormatter"},{"attributes":{},"id":"2da6313b-af6c-4a61-8b7e-a44d231845e0","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"firebrick"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":null},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"65626761-62f5-4704-8367-eb54d87dd5a1","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"65626761-62f5-4704-8367-eb54d87dd5a1","type":"BoxAnnotation"},"plot":{"id":"8767d3d2-c310-418e-ba7b-28765bb2d8b7","subtype":"Figure","type":"Plot"},"renderers":[{"id":"1924c84f-480f-4fa3-920f-a6553ffe3039","type":"GlyphRenderer"}]},"id":"4d5b9383-763f-4745-bb14-64d1d8361e45","type":"BoxSelectTool"},{"attributes":{},"id":"2d3f6039-a8b6-4034-9ccb-4f41af0a28ed","type":"BasicTicker"},{"attributes":{"callback":null},"id":"8f70ea32-f7c8-4910-901d-e6dcfc334f35","type":"DataRange1d"},{"attributes":{"callback":null},"id":"87bdca63-25bd-4e73-9400-b342d83b84f3","type":"DataRange1d"},{"attributes":{"overlay":{"id":"59170db5-3038-4a91-9020-f114d1e5d30f","type":"BoxAnnotation"},"plot":{"id":"8767d3d2-c310-418e-ba7b-28765bb2d8b7","subtype":"Figure","type":"Plot"}},"id":"581a034d-a5e9-49f7-a763-590632fa43f0","type":"BoxZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"af4e2f3c-afe6-4800-9592-87c305833462","type":"Circle"},{"attributes":{"formatter":{"id":"92ae3cd2-8a18-4926-a948-65097a16fd29","type":"BasicTickFormatter"},"plot":{"id":"8767d3d2-c310-418e-ba7b-28765bb2d8b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2da6313b-af6c-4a61-8b7e-a44d231845e0","type":"BasicTicker"}},"id":"8c871e6f-9797-4741-8ba7-990e63fa0c1d","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":null},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"olive"},"line_dash":[],"line_width":{"value":8},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"59170db5-3038-4a91-9020-f114d1e5d30f","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[10,10],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"d0aeab9b-1068-49b0-918c-235a3791611f","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"c1001f85-046a-48d5-97ad-fcbc2d16b8ca","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.8998594792053124,0.22657525712336635,0.238699632201973,0.9711577206821972,0.6104714509379011,0.30490153912162266,0.9384399863776676,0.35779840660795303,0.09746577502206988,0.7156070277812278,0.011263450743424941,0.8288129710260724,0.9299674300757828,0.966797532234135,0.08105646109755094,0.3756250499779349,0.38487913490967807,0.5152264110383156,0.7058797945274532,0.9450003081145799,0.6995418136885653,0.07299518850919307,0.1582534374596022,0.2699693458860024,0.7112013229594348,0.1598322730661994,0.05971090427547454,0.9320454638766118,0.3547866364892759,0.9085412988601521,0.8839934899903069,0.4461179422076531,0.7896052979083018,0.6573896178842789,0.1566012700733076,0.31970134270676986,0.5712929472106825,0.30930015369084896,0.3046298850644994,0.6476339218848252,0.8777455195592226,0.7157703726897993,0.1243095108710136,0.11982846111632062,0.4177359039601325,0.3820573246956146,0.9760742240640402,0.7497297759469946,0.9596915633089267,0.18643068457409306,0.103459261586489,0.6472912464771711,0.5990395443699196,0.7060634300530159,0.9242168009007026,0.15376761999077881,0.48303137914767846,0.32843020795022804,0.6876622331150904,0.6700007386191462,0.555638712167319,0.8528422045224378,0.20473445092985088,0.0917639476256843,0.20656123376588675,0.6065698710208463,0.2912698878128105,0.27134896265758646,0.16220211376240923,0.5799932563581528,0.07500802407646379,0.9815156275269861,0.21650155818362626,0.578181482860706,0.5711433652159037,0.7801036611284318,0.37819011289921356,0.09531129748902778,0.817778616029001,0.17773039551603842,0.6053658720365674,0.8649445936106056,0.0022446025590222574,0.4420862116017321,0.7882644587814815,0.29177299174781,0.8404221866374137,0.04092041735898155,0.5192245242169098,0.35222823496379796,0.611195143426228,0.23123321771496097,0.9180450451466428,0.46751208410594325,0.22214517222139896,0.5884338671167471,0.035303291957746286,0.40562483587921705,0.7387372532048689,0.21500469866354122,0.2671176530696916,0.48678623449730174,0.3387937350216239,0.7639258373270628,0.5455050937554878,0.39545275161058013,0.2653325330735522,0.12281467716892824,0.5449717113107857,0.9310065468470253,0.895504811771837,0.9312501162895915,0.45975971161892615,0.037725603529958796,0.8806305258053498,0.6828645447808144,0.9161859900123257,0.7894460334732901,0.46747957745822355,0.9272774460174803,0.3027248546883323,0.2531915392543789,0.37616443331785643,0.4021126207176745,0.27308627628811366,0.5559500607971627,0.24371853538724364,0.6402608904170521,0.8729619967352005,0.08829945661159277,0.3099633074660363,0.9129218946707814,0.129821233871111,0.9746059030951897,0.6701858849646923,0.2582054013037769,0.07342034038548839,0.5043360208418272,0.6525145074834677,0.37363210890171283,0.14589780625146376,0.19595000575832067,0.05019388962331406,0.6592402903805036,0.4253120957261186,0.4961304506066859,0.1908576409365852,0.3091860573732721,0.7918928299625393,0.5672390480795674,0.4586216017612157,0.75176827876082,0.4849183696040221,0.4529486772464081,0.41714328650808963,0.7196395778831056,0.3470076855642549,0.3541847642248165,0.7157070896744453,0.2947301521323483,0.04355261041253611,0.6064373040900752,0.8292929593144295,0.6231697780650068,0.5106555074051344,0.8374122695118437,0.7767549483819766,0.7904300948776359,0.0535988795103457,0.503897793107493,0.3393022800217632,0.4640041543879785,0.3328426170398282,0.3626279995677065,0.9849730857694527,0.7284472513225019,0.640984418532625,0.9421766259883385,0.8018477375116728,0.03767290979768656,0.6479347618602096,0.11437682818387163,0.9104585918514128,0.12087219484916556,0.7312641704040812,0.872794826005744,0.7470960503351353,0.22178320690232212,0.45738793626240004,0.269168639535029,0.07012902169573387,0.49828774417531796,0.07899222607728218,0.31866981941606365,0.3764893809091865,0.9591730189726808,0.5814425124199419,0.03588144144284933,0.9508813952604787,0.36442733321942933],"y":[0.9463214036641111,0.14562179164946165,0.2579013640118465,0.5360620007804466,0.6139878805989187,0.20162283952449322,0.9265287802442395,0.08631243680559453,0.6747562581075859,0.05398325852186814,0.03892565890866162,0.22431128959120328,0.7060738305719754,0.5570332300813485,0.36360068349477526,0.4213660873937295,0.29878032056236326,0.14849342460079007,0.5283156610250535,0.5968233277280274,0.9848173466846222,0.3437332343713878,0.34851406502624016,0.45597614142517795,0.12682827711145728,0.22741453209466478,0.8381629392062813,0.7932272511891536,0.18409280001995476,0.2845791808393445,0.41340674343559325,0.663749098357456,0.1447019007938165,0.8619794544073869,0.9944328856472122,0.15657027941532264,0.07364334032536013,0.8516227395897564,0.7431462543052848,0.5478627652245055,0.5990873508845811,0.580539486122669,0.01938915331696689,0.09181746777839606,0.598641990095561,0.6869087771070282,0.017722412733137016,0.21359065627405216,0.04177790673885251,0.3899092001992971,0.3696185723144132,0.21218881225591557,0.967484329771528,0.37362351838433916,0.9362170490575532,0.5400469091557845,0.4636743732009724,0.6158277377589304,0.8961842985380006,0.008929552337407998,0.09292863742151292,0.2584447490926556,0.38948998707981053,0.31637186760560576,0.11324013850156389,0.5506892152954717,0.43020995497537107,0.28196352490049414,0.07284267102096031,0.9029109758982766,0.34136578051523203,0.8621827286035794,0.550970685096727,0.3456548137692562,0.2780535597755813,0.2785367339609326,0.5211538161425278,0.1301525255023951,0.556504228095585,0.6003166770583942,0.05789976295136279,0.03902976053091556,0.9631624425877741,0.3117292899377053,0.885960093126386,0.8269474569963625,0.9136533277929402,0.573021558851861,0.07803134051727467,0.4796912375453919,0.25362397074917364,0.04015464409409908,0.4392412831392867,0.08091097336694386,0.2221578471327441,0.2744030169394832,0.8030063252665469,0.43853896885870447,0.43763566216123606,0.4231107513341117,0.49442141698410413,0.1244847815571255,0.5202593440232502,0.8769544730056393,0.5917512265799288,0.8290082035406776,0.35608179887302394,0.36314818603900023,0.5601892346141366,0.573201067165089,0.2027385436971737,0.5610441695690938,0.14176960471499145,0.36564332214989725,0.6318321942923937,0.19002425625057107,0.7758025174180431,0.04231259307134294,0.6246609079682245,0.05629634661409966,0.37982828770538357,0.807005052939692,0.7713229399089576,0.649042503050694,0.8675565689269858,0.982549570764213,0.7372772707840067,0.4551038121190145,0.9159448755978574,0.46976323983567125,0.4874410459821731,0.9512772579797758,0.7104221607163181,0.2435814011783355,0.9791151476766605,0.20386716789723425,0.4150211964610403,0.7104613265404671,0.4140021599655688,0.42008323087208443,0.48314890239911523,0.7143435945279998,0.24367290969758237,0.40409903988265294,0.679512901961324,0.5760214207365106,0.3382481727870372,0.9039958693712861,0.2030601951453217,0.0015273566792467497,0.5500898522870036,0.9963618525241702,0.8622939562727225,0.9745632635631033,0.9887231283726465,0.3874969011036776,0.7469985599758286,0.5054596125102627,0.37478211121252014,0.40722470844513226,0.1735904440441678,0.11928054790657827,0.9655298994672764,0.2687943983077584,0.6109628825714534,0.6283810758357191,0.7766260758030783,0.20823692476772726,0.2387624173106886,0.9181589172273178,0.6985134813598965,0.5596333696282668,0.5651143587195454,0.6061846624570523,0.5685436075071622,0.9208466991989881,0.7198581296346289,0.8189050246891563,0.7190972986302229,0.900913925596421,0.3845770985235005,0.33530890350259657,0.04538862658056064,0.43018624352635426,0.19121607408180163,0.28867376737743655,0.039909899854417286,0.7821834162546472,0.08497572831353983,0.5522686398294675,0.35990398832900206,0.8969132371512185,0.5506791450842877,0.6943828820373155,0.5249996763062514,0.1412262679668359,0.6051073883208427,0.2822753380665065,0.7791547509014868,0.5045414729995388]}},"id":"69f8ba6c-5d33-4c77-b05c-85bbeddb2c08","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"04b223e2-5cc6-4b40-b30f-017f8e10beac","type":"LinearAxis"}],"left":[{"id":"8c871e6f-9797-4741-8ba7-990e63fa0c1d","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"04b223e2-5cc6-4b40-b30f-017f8e10beac","type":"LinearAxis"},{"id":"fffa8959-3683-4a79-96e6-cb593ffa206b","type":"Grid"},{"id":"8c871e6f-9797-4741-8ba7-990e63fa0c1d","type":"LinearAxis"},{"id":"166231ae-57da-4800-92d3-01fe206a323c","type":"Grid"},{"id":"65626761-62f5-4704-8367-eb54d87dd5a1","type":"BoxAnnotation"},{"id":"59170db5-3038-4a91-9020-f114d1e5d30f","type":"BoxAnnotation"},{"id":"d0aeab9b-1068-49b0-918c-235a3791611f","type":"PolyAnnotation"},{"id":"1924c84f-480f-4fa3-920f-a6553ffe3039","type":"GlyphRenderer"}],"title":{"id":"d7366407-fc3c-4b1e-a916-b7745c468ed4","type":"Title"},"tool_events":{"id":"5b92aaff-d82c-4d08-a6d5-6a328b4b5584","type":"ToolEvents"},"toolbar":{"id":"ee4d0625-84c9-4556-bcd1-4e986fa04617","type":"Toolbar"},"x_range":{"id":"8f70ea32-f7c8-4910-901d-e6dcfc334f35","type":"DataRange1d"},"y_range":{"id":"87bdca63-25bd-4e73-9400-b342d83b84f3","type":"DataRange1d"}},"id":"8767d3d2-c310-418e-ba7b-28765bb2d8b7","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"66124404-9415-4b4f-b212-ecd446a6c6b6","type":"BasicTickFormatter"},"plot":{"id":"8767d3d2-c310-418e-ba7b-28765bb2d8b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d3f6039-a8b6-4034-9ccb-4f41af0a28ed","type":"BasicTicker"}},"id":"04b223e2-5cc6-4b40-b30f-017f8e10beac","type":"LinearAxis"},{"attributes":{"plot":{"id":"8767d3d2-c310-418e-ba7b-28765bb2d8b7","subtype":"Figure","type":"Plot"}},"id":"909d122e-410e-4834-bd9b-0e9457b73855","type":"ResetTool"},{"attributes":{"plot":null,"text":"Select and Zoom"},"id":"d7366407-fc3c-4b1e-a916-b7745c468ed4","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4d5b9383-763f-4745-bb14-64d1d8361e45","type":"BoxSelectTool"},{"id":"581a034d-a5e9-49f7-a763-590632fa43f0","type":"BoxZoomTool"},{"id":"572093ce-018c-437b-9d6e-34f538b494d5","type":"LassoSelectTool"},{"id":"909d122e-410e-4834-bd9b-0e9457b73855","type":"ResetTool"}]},"id":"ee4d0625-84c9-4556-bcd1-4e986fa04617","type":"Toolbar"},{"attributes":{},"id":"92ae3cd2-8a18-4926-a948-65097a16fd29","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"69f8ba6c-5d33-4c77-b05c-85bbeddb2c08","type":"ColumnDataSource"},"glyph":{"id":"c1001f85-046a-48d5-97ad-fcbc2d16b8ca","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"af4e2f3c-afe6-4800-9592-87c305833462","type":"Circle"},"selection_glyph":null},"id":"1924c84f-480f-4fa3-920f-a6553ffe3039","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8767d3d2-c310-418e-ba7b-28765bb2d8b7","subtype":"Figure","type":"Plot"},"ticker":{"id":"2d3f6039-a8b6-4034-9ccb-4f41af0a28ed","type":"BasicTicker"}},"id":"fffa8959-3683-4a79-96e6-cb593ffa206b","type":"Grid"},{"attributes":{},"id":"5b92aaff-d82c-4d08-a6d5-6a328b4b5584","type":"ToolEvents"}],"root_ids":["8767d3d2-c310-418e-ba7b-28765bb2d8b7"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"6ad9c0cb-f07e-40cb-b913-204b027f2c7b","elementid":"f3455e62-2b5c-45d2-98b4-acc123d3ee7d","modelid":"8767d3d2-c310-418e-ba7b-28765bb2d8b7"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
          Bokeh.embed.inject_css("https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css");
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