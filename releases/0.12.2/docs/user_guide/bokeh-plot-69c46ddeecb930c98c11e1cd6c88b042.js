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
      };var element = document.getElementById("2264a981-85be-4d46-84d2-1efbe7612956");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2264a981-85be-4d46-84d2-1efbe7612956' but no matching script tag was found. ")
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
                  var docs_json = {"947cc6e9-36bf-44d5-b17d-dba0e3962688":{"roots":{"references":[{"attributes":{"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"}},"id":"e5f956a0-061a-4950-9fe3-07dfdaf4fd80","type":"ResetTool"},{"attributes":{"overlay":{"id":"53bed6bb-0d80-46fc-aea3-292725b84aaf","type":"BoxAnnotation"},"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"}},"id":"6d23b6bf-b3be-45ce-8743-37e5489a52c5","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"12eadb21-92a9-49e3-8f88-0202c42ada67","type":"LinearAxis"}],"left":[{"id":"1111fc9e-ed81-4600-8ed3-827bfa30a17e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"12eadb21-92a9-49e3-8f88-0202c42ada67","type":"LinearAxis"},{"id":"6e267479-5465-43e7-847b-addc4a4d1b2c","type":"Grid"},{"id":"1111fc9e-ed81-4600-8ed3-827bfa30a17e","type":"LinearAxis"},{"id":"aaac32cd-9e8d-4a22-b9cf-a402893fcf32","type":"Grid"},{"id":"53bed6bb-0d80-46fc-aea3-292725b84aaf","type":"BoxAnnotation"},{"id":"62ef5615-040f-4d8f-a23d-cbfa783bc85d","type":"GlyphRenderer"}],"title":{"id":"c4a2c204-14e0-4955-a3f1-d405ae02fed3","type":"Title"},"tool_events":{"id":"acd9baff-7760-479f-9066-bae33dbc6b8b","type":"ToolEvents"},"toolbar":{"id":"e2a6e461-4292-487c-9ab2-6a16d738e6cc","type":"Toolbar"},"x_range":{"id":"ffd56861-e224-4686-a96d-fdd34c508ef9","type":"Range1d"},"y_range":{"id":"4ef2ba27-89d0-44c3-8e3c-2153a5365b06","type":"Range1d"}},"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"7366a560-afba-4f74-8a20-bbe94da24dfc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"}},"id":"37feaa0a-910b-4a38-b7ef-b133eacc23e8","type":"SaveTool"},{"attributes":{},"id":"03634947-ae93-4a9d-8fee-8b6b714b1f9d","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b622542b-d1a3-4cae-92a6-28200fe6e11b","type":"BasicTicker"}},"id":"aaac32cd-9e8d-4a22-b9cf-a402893fcf32","type":"Grid"},{"attributes":{},"id":"b622542b-d1a3-4cae-92a6-28200fe6e11b","type":"BasicTicker"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b7b3945-8865-49a7-8ee6-1335650eb92a","type":"ImageRGBA"},{"attributes":{"plot":null,"text":null},"id":"c4a2c204-14e0-4955-a3f1-d405ae02fed3","type":"Title"},{"attributes":{"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"}},"id":"bfceee11-49cd-459f-b140-f13fac00c580","type":"PanTool"},{"attributes":{"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"}},"id":"984d3bf2-fa6b-42f5-8f54-601f8c2b8160","type":"HelpTool"},{"attributes":{"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"}},"id":"96511a55-e2d8-4d47-82eb-7ff73ee67712","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"7366a560-afba-4f74-8a20-bbe94da24dfc","type":"BasicTickFormatter"},"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"},"ticker":{"id":"b622542b-d1a3-4cae-92a6-28200fe6e11b","type":"BasicTicker"}},"id":"1111fc9e-ed81-4600-8ed3-827bfa30a17e","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x","image","dh","dw"],"data":{"dh":[10],"dw":[10],"image":[[[4278230528,4279016960,4279868928,4280720896,4281572864,4282359296,4283211264,4284063232,4284915200,4285701632,4286553600,4287405568,4288257536,4289043968,4289895936,4290747904,4291599872,4292386304,4293238272,4294090240],[4278230540,4279016972,4279868940,4280720908,4281572876,4282359308,4283211276,4284063244,4284915212,4285701644,4286553612,4287405580,4288257548,4289043980,4289895948,4290747916,4291599884,4292386316,4293238284,4294090252],[4278230553,4279016985,4279868953,4280720921,4281572889,4282359321,4283211289,4284063257,4284915225,4285701657,4286553625,4287405593,4288257561,4289043993,4289895961,4290747929,4291599897,4292386329,4293238297,4294090265],[4278230566,4279016998,4279868966,4280720934,4281572902,4282359334,4283211302,4284063270,4284915238,4285701670,4286553638,4287405606,4288257574,4289044006,4289895974,4290747942,4291599910,4292386342,4293238310,4294090278],[4278230579,4279017011,4279868979,4280720947,4281572915,4282359347,4283211315,4284063283,4284915251,4285701683,4286553651,4287405619,4288257587,4289044019,4289895987,4290747955,4291599923,4292386355,4293238323,4294090291],[4278230591,4279017023,4279868991,4280720959,4281572927,4282359359,4283211327,4284063295,4284915263,4285701695,4286553663,4287405631,4288257599,4289044031,4289895999,4290747967,4291599935,4292386367,4293238335,4294090303],[4278230604,4279017036,4279869004,4280720972,4281572940,4282359372,4283211340,4284063308,4284915276,4285701708,4286553676,4287405644,4288257612,4289044044,4289896012,4290747980,4291599948,4292386380,4293238348,4294090316],[4278230617,4279017049,4279869017,4280720985,4281572953,4282359385,4283211353,4284063321,4284915289,4285701721,4286553689,4287405657,4288257625,4289044057,4289896025,4290747993,4291599961,4292386393,4293238361,4294090329],[4278230630,4279017062,4279869030,4280720998,4281572966,4282359398,4283211366,4284063334,4284915302,4285701734,4286553702,4287405670,4288257638,4289044070,4289896038,4290748006,4291599974,4292386406,4293238374,4294090342],[4278230642,4279017074,4279869042,4280721010,4281572978,4282359410,4283211378,4284063346,4284915314,4285701746,4286553714,4287405682,4288257650,4289044082,4289896050,4290748018,4291599986,4292386418,4293238386,4294090354],[4278230655,4279017087,4279869055,4280721023,4281572991,4282359423,4283211391,4284063359,4284915327,4285701759,4286553727,4287405695,4288257663,4289044095,4289896063,4290748031,4291599999,4292386431,4293238399,4294090367],[4278230668,4279017100,4279869068,4280721036,4281573004,4282359436,4283211404,4284063372,4284915340,4285701772,4286553740,4287405708,4288257676,4289044108,4289896076,4290748044,4291600012,4292386444,4293238412,4294090380],[4278230681,4279017113,4279869081,4280721049,4281573017,4282359449,4283211417,4284063385,4284915353,4285701785,4286553753,4287405721,4288257689,4289044121,4289896089,4290748057,4291600025,4292386457,4293238425,4294090393],[4278230693,4279017125,4279869093,4280721061,4281573029,4282359461,4283211429,4284063397,4284915365,4285701797,4286553765,4287405733,4288257701,4289044133,4289896101,4290748069,4291600037,4292386469,4293238437,4294090405],[4278230706,4279017138,4279869106,4280721074,4281573042,4282359474,4283211442,4284063410,4284915378,4285701810,4286553778,4287405746,4288257714,4289044146,4289896114,4290748082,4291600050,4292386482,4293238450,4294090418],[4278230719,4279017151,4279869119,4280721087,4281573055,4282359487,4283211455,4284063423,4284915391,4285701823,4286553791,4287405759,4288257727,4289044159,4289896127,4290748095,4291600063,4292386495,4293238463,4294090431],[4278230732,4279017164,4279869132,4280721100,4281573068,4282359500,4283211468,4284063436,4284915404,4285701836,4286553804,4287405772,4288257740,4289044172,4289896140,4290748108,4291600076,4292386508,4293238476,4294090444],[4278230744,4279017176,4279869144,4280721112,4281573080,4282359512,4283211480,4284063448,4284915416,4285701848,4286553816,4287405784,4288257752,4289044184,4289896152,4290748120,4291600088,4292386520,4293238488,4294090456],[4278230757,4279017189,4279869157,4280721125,4281573093,4282359525,4283211493,4284063461,4284915429,4285701861,4286553829,4287405797,4288257765,4289044197,4289896165,4290748133,4291600101,4292386533,4293238501,4294090469],[4278230770,4279017202,4279869170,4280721138,4281573106,4282359538,4283211506,4284063474,4284915442,4285701874,4286553842,4287405810,4288257778,4289044210,4289896178,4290748146,4291600114,4292386546,4293238514,4294090482]]],"x":[0],"y":[0]}},"id":"30380646-e8af-4b7a-adb3-b4a7c94cf1fa","type":"ColumnDataSource"},{"attributes":{},"id":"0f2a22f7-a2cb-4cad-badb-de73ec8b1fef","type":"BasicTicker"},{"attributes":{"data_source":{"id":"30380646-e8af-4b7a-adb3-b4a7c94cf1fa","type":"ColumnDataSource"},"glyph":{"id":"1b7b3945-8865-49a7-8ee6-1335650eb92a","type":"ImageRGBA"},"hover_glyph":null,"nonselection_glyph":{"id":"48053921-c658-40c7-adf5-fc3a5d3b9cd4","type":"ImageRGBA"},"selection_glyph":null},"id":"62ef5615-040f-4d8f-a23d-cbfa783bc85d","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53bed6bb-0d80-46fc-aea3-292725b84aaf","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bfceee11-49cd-459f-b140-f13fac00c580","type":"PanTool"},{"id":"96511a55-e2d8-4d47-82eb-7ff73ee67712","type":"WheelZoomTool"},{"id":"6d23b6bf-b3be-45ce-8743-37e5489a52c5","type":"BoxZoomTool"},{"id":"37feaa0a-910b-4a38-b7ef-b133eacc23e8","type":"SaveTool"},{"id":"e5f956a0-061a-4950-9fe3-07dfdaf4fd80","type":"ResetTool"},{"id":"984d3bf2-fa6b-42f5-8f54-601f8c2b8160","type":"HelpTool"}]},"id":"e2a6e461-4292-487c-9ab2-6a16d738e6cc","type":"Toolbar"},{"attributes":{"callback":null,"end":10},"id":"4ef2ba27-89d0-44c3-8e3c-2153a5365b06","type":"Range1d"},{"attributes":{"formatter":{"id":"03634947-ae93-4a9d-8fee-8b6b714b1f9d","type":"BasicTickFormatter"},"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f2a22f7-a2cb-4cad-badb-de73ec8b1fef","type":"BasicTicker"}},"id":"12eadb21-92a9-49e3-8f88-0202c42ada67","type":"LinearAxis"},{"attributes":{},"id":"acd9baff-7760-479f-9066-bae33dbc6b8b","type":"ToolEvents"},{"attributes":{"plot":{"id":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c","subtype":"Figure","type":"Plot"},"ticker":{"id":"0f2a22f7-a2cb-4cad-badb-de73ec8b1fef","type":"BasicTicker"}},"id":"6e267479-5465-43e7-847b-addc4a4d1b2c","type":"Grid"},{"attributes":{"callback":null,"end":10},"id":"ffd56861-e224-4686-a96d-fdd34c508ef9","type":"Range1d"},{"attributes":{"dh":{"field":"dh","units":"data"},"dw":{"field":"dw","units":"data"},"image":{"field":"image"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48053921-c658-40c7-adf5-fc3a5d3b9cd4","type":"ImageRGBA"}],"root_ids":["32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"947cc6e9-36bf-44d5-b17d-dba0e3962688","elementid":"2264a981-85be-4d46-84d2-1efbe7612956","modelid":"32c7035a-fcb6-4ed6-b8ed-94a8e47bb02c"}];
                  
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