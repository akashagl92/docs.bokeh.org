document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("f6eb1d8f-a85e-4d1a-a611-0a2c7b876e6c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f6eb1d8f-a85e-4d1a-a611-0a2c7b876e6c' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
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
              var docs_json = {"37b08eb7-5ab7-4fec-8b9f-73473d2eca98":{"roots":{"references":[{"attributes":{"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"}},"id":"85b81834-a150-4e8f-9431-d9db21d934aa","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53abe312-8acb-46d6-9dd6-1fa21522e661","type":"BoxAnnotation"},{"attributes":{},"id":"aafee419-abbc-429b-af92-ee3f2c0274af","type":"BasicTickFormatter"},{"attributes":{"callback":null,"end":6.5,"start":-6.5},"id":"4be730b9-25af-4928-b3a2-0307ee87105b","type":"Range1d"},{"attributes":{"overlay":{"id":"53abe312-8acb-46d6-9dd6-1fa21522e661","type":"BoxAnnotation"},"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"}},"id":"ea2eaad3-6c8f-4f7d-84de-6c45ff4a5548","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"}},"id":"a4cb4a80-682b-4ab6-b138-e198646c4c7b","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"blue"},"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9866db4b-f405-4b1a-9d0d-4262b6709d32","type":"Circle"},{"attributes":{},"id":"4dc906a9-5296-4921-8571-c79837e8db0f","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"af7fe5b1-7473-4b56-9d55-0ff15d329e5b","type":"ColumnDataSource"},"glyph":{"id":"4f1ef0e4-f4fb-49d0-8c77-b850468bacc7","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"7c002fd3-715e-4434-b14b-e8883e95b219","type":"Circle"},"selection_glyph":null},"id":"5e22b4a3-1623-4940-a3d9-3ab08d731167","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d801cbd-eecd-4ffc-ae64-b1e36834cfa5","type":"Circle"},{"attributes":{"formatter":{"id":"4dc906a9-5296-4921-8571-c79837e8db0f","type":"BasicTickFormatter"},"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"},"ticker":{"id":"bb7b6e97-1b54-4fd3-8e67-4e7111dedf58","type":"BasicTicker"},"y_range_name":"foo"},"id":"353bcf62-bca9-491b-b23d-fd10e8bd0844","type":"LinearAxis"},{"attributes":{"formatter":{"id":"df125bdb-74a6-4992-8af9-16786cdec257","type":"BasicTickFormatter"},"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"},"ticker":{"id":"417a3b97-947a-45e3-86b7-9a911dddf44d","type":"BasicTicker"}},"id":"a7a92cc1-ef1d-4b2f-9085-fea964c61b6e","type":"LinearAxis"},{"attributes":{"plot":null,"text":null},"id":"faea8cb2-b5d8-4ce8-b322-e616b7fc2ecb","type":"Title"},{"attributes":{"callback":null,"end":100},"id":"d5d7d29b-4dd0-4169-8a13-3df9735a1048","type":"Range1d"},{"attributes":{},"id":"271014a6-5ff0-4eca-8439-e685cb13233f","type":"BasicTicker"},{"attributes":{},"id":"b41c6b8e-d48e-4b8f-bd0b-dd51e2d5e51e","type":"ToolEvents"},{"attributes":{"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"}},"id":"e13f1fb8-2443-40eb-b070-616a5b6a3598","type":"ResetTool"},{"attributes":{"callback":null,"end":1.1,"start":-1.1},"id":"3270f681-97f6-47c3-9ca2-ab748f5adf92","type":"Range1d"},{"attributes":{"below":[{"id":"a7a92cc1-ef1d-4b2f-9085-fea964c61b6e","type":"LinearAxis"}],"extra_y_ranges":{"foo":{"id":"d5d7d29b-4dd0-4169-8a13-3df9735a1048","type":"Range1d"}},"left":[{"id":"01c2402a-33a5-430f-9419-36155aa4135a","type":"LinearAxis"},{"id":"353bcf62-bca9-491b-b23d-fd10e8bd0844","type":"LinearAxis"}],"renderers":[{"id":"a7a92cc1-ef1d-4b2f-9085-fea964c61b6e","type":"LinearAxis"},{"id":"aa03fdb9-6efa-46ed-a7ae-cb0cf8c63954","type":"Grid"},{"id":"01c2402a-33a5-430f-9419-36155aa4135a","type":"LinearAxis"},{"id":"8fb8e056-6b62-4157-bbcb-3c86794e4cfa","type":"Grid"},{"id":"53abe312-8acb-46d6-9dd6-1fa21522e661","type":"BoxAnnotation"},{"id":"5e22b4a3-1623-4940-a3d9-3ab08d731167","type":"GlyphRenderer"},{"id":"a1d563d4-fac6-4f13-8a08-ddf784775e91","type":"GlyphRenderer"},{"id":"353bcf62-bca9-491b-b23d-fd10e8bd0844","type":"LinearAxis"}],"title":{"id":"faea8cb2-b5d8-4ce8-b322-e616b7fc2ecb","type":"Title"},"tool_events":{"id":"b41c6b8e-d48e-4b8f-bd0b-dd51e2d5e51e","type":"ToolEvents"},"toolbar":{"id":"bdb26c10-cb59-407e-bec1-6fa8bc58eefa","type":"Toolbar"},"x_range":{"id":"4be730b9-25af-4928-b3a2-0307ee87105b","type":"Range1d"},"y_range":{"id":"3270f681-97f6-47c3-9ca2-ab748f5adf92","type":"Range1d"}},"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"d4eb3f31-8f79-4126-9ec5-6b2ceff670b0","type":"ColumnDataSource"},"glyph":{"id":"9866db4b-f405-4b1a-9d0d-4262b6709d32","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"0d801cbd-eecd-4ffc-ae64-b1e36834cfa5","type":"Circle"},"selection_glyph":null,"y_range_name":"foo"},"id":"a1d563d4-fac6-4f13-8a08-ddf784775e91","type":"GlyphRenderer"},{"attributes":{},"id":"df125bdb-74a6-4992-8af9-16786cdec257","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"}},"id":"b8595d0d-24d1-405e-bda8-78b634d473b0","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b8595d0d-24d1-405e-bda8-78b634d473b0","type":"PanTool"},{"id":"a4cb4a80-682b-4ab6-b138-e198646c4c7b","type":"WheelZoomTool"},{"id":"ea2eaad3-6c8f-4f7d-84de-6c45ff4a5548","type":"BoxZoomTool"},{"id":"85b81834-a150-4e8f-9431-d9db21d934aa","type":"SaveTool"},{"id":"e13f1fb8-2443-40eb-b070-616a5b6a3598","type":"ResetTool"},{"id":"4531dc8e-4cc8-447d-a397-e04cf9bb74ec","type":"HelpTool"}]},"id":"bdb26c10-cb59-407e-bec1-6fa8bc58eefa","type":"Toolbar"},{"attributes":{"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"},"ticker":{"id":"417a3b97-947a-45e3-86b7-9a911dddf44d","type":"BasicTicker"}},"id":"aa03fdb9-6efa-46ed-a7ae-cb0cf8c63954","type":"Grid"},{"attributes":{"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"}},"id":"4531dc8e-4cc8-447d-a397-e04cf9bb74ec","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"},"ticker":{"id":"271014a6-5ff0-4eca-8439-e685cb13233f","type":"BasicTicker"}},"id":"8fb8e056-6b62-4157-bbcb-3c86794e4cfa","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-6.283185307179586,-6.183185307179587,-6.083185307179587,-5.983185307179587,-5.883185307179588,-5.783185307179588,-5.683185307179588,-5.583185307179589,-5.483185307179589,-5.383185307179589,-5.28318530717959,-5.18318530717959,-5.0831853071795905,-4.983185307179591,-4.883185307179591,-4.783185307179592,-4.683185307179592,-4.583185307179592,-4.483185307179593,-4.383185307179593,-4.283185307179593,-4.183185307179594,-4.083185307179594,-3.9831853071795944,-3.8831853071795948,-3.783185307179595,-3.6831853071795955,-3.583185307179596,-3.483185307179596,-3.3831853071795965,-3.283185307179597,-3.1831853071795972,-3.0831853071795976,-2.983185307179598,-2.8831853071795983,-2.7831853071795987,-2.683185307179599,-2.5831853071795994,-2.4831853071795997,-2.3831853071796,-2.2831853071796004,-2.183185307179601,-2.083185307179601,-1.9831853071796015,-1.8831853071796019,-1.7831853071796022,-1.6831853071796026,-1.583185307179603,-1.4831853071796033,-1.3831853071796036,-1.283185307179604,-1.1831853071796044,-1.0831853071796047,-0.9831853071796051,-0.8831853071796054,-0.7831853071796058,-0.6831853071796061,-0.5831853071796065,-0.48318530717960684,-0.3831853071796072,-0.28318530717960755,-0.1831853071796079,-0.08318530717960826,0.016814692820391386,0.11681469282039103,0.21681469282039068,0.3168146928203903,0.41681469282038996,0.5168146928203896,0.6168146928203893,0.7168146928203889,0.8168146928203885,0.9168146928203882,1.0168146928203878,1.1168146928203875,1.2168146928203871,1.3168146928203868,1.4168146928203864,1.516814692820386,1.6168146928203857,1.7168146928203853,1.816814692820385,1.9168146928203846,2.0168146928203843,2.116814692820384,2.2168146928203836,2.316814692820383,2.416814692820383,2.5168146928203825,2.616814692820382,2.716814692820382,2.8168146928203814,2.916814692820381,3.0168146928203807,3.1168146928203804,3.21681469282038,3.3168146928203797,3.4168146928203793,3.516814692820379,3.6168146928203786,3.7168146928203782,3.816814692820378,3.9168146928203775,4.016814692820377,4.116814692820377,4.2168146928203765,4.316814692820376,4.416814692820376,4.516814692820375,4.616814692820375,4.716814692820375,4.816814692820374,4.916814692820374,5.016814692820374,5.116814692820373,5.216814692820373,5.316814692820373,5.416814692820372,5.516814692820372,5.6168146928203715,5.716814692820371,5.816814692820371,5.91681469282037,6.01681469282037,6.11681469282037,6.216814692820369],"y":[2.4492935982947064e-16,0.09983341664682804,0.19866933079506077,0.29552020666133877,0.3894183423086494,0.4794255386042017,0.5646424733950338,0.6442176872376894,0.7173560908995209,0.7833269096274815,0.8414709848078947,0.8912073600614336,0.9320390859672248,0.9635581854171918,0.9854497299884594,0.9974949866040541,0.9995736030415053,0.9916648104524693,0.9738476308781966,0.9463000876874166,0.9092974268256846,0.8632093666488774,0.8084964038195946,0.7457052121767255,0.6754631805511571,0.5984721441039634,0.5155013718214719,0.4273798802338384,0.33498815015591404,0.23924932921399208,0.14112000805987754,0.04158066243330134,-0.0583741434275688,-0.15774569414323705,-0.2555411020268199,-0.35078322768960846,-0.44252044329484114,-0.5298361409084823,-0.6118578909427086,-0.6877661591839639,-0.7568024953079191,-0.8182771110644023,-0.8715757724135809,-0.9161659367494489,-0.9516020738895112,-0.9775301176650938,-0.9936910036334626,-0.9999232575641007,-0.9961646088358421,-0.9824526126243357,-0.9589242746631434,-0.925814682327739,-0.8834546557201618,-0.8322674422239115,-0.7727644875559994,-0.7055403255704056,-0.6312666378723365,-0.5506855425976545,-0.46460217941377524,-0.37387666483025556,-0.2794154981989461,-0.1821625042721166,-0.08308940281751828,0.016813900484327755,0.11654920485047095,0.2151199880877932,0.31154136351335615,0.4048499206165766,0.4941133511385875,0.5784397643881801,0.6569865987187705,0.7289690401258591,0.7936678638491377,0.850436620628551,0.8987080958116154,0.9379999767747297,0.9679196720314797,0.9881682338769963,0.9985433453746034,0.9989413418397733,0.9893582466233859,0.9698898108450932,0.9407305566797827,0.9021718337563063,0.8545989080882961,0.7984871126235084,0.7343970978741338,0.6629692300822058,0.5849171928917875,0.5010208564579122,0.41211848524178546,0.31909836234938216,0.22288991410027859,0.12445442350709494,0.024775425453391262,-0.0751511204617759,-0.17432678122294665,-0.2717606264109102,-0.3664791292518956,-0.45753589377528997,-0.5440211108893402,-0.6250706488928546,-0.6998746875935171,-0.7676858097635587,-0.8278264690856328,-0.8796957599716525,-0.9227754216127924,-0.9566350162701771,-0.980936230066484,-0.9954362533063738,-0.9999902065507036,-0.9945525882039933,-0.9791777291513253,-0.9540192499021012,-0.9193285256646917,-0.8754521746884482,-0.822828594968732,-0.7619835839190596,-0.6935250847771529,-0.6181371122370666,-0.5365729180004707,-0.44964746453463933,-0.3582292822368683,-0.26323179136584357,-0.16560417544835296,-0.06632189735124476]}},"id":"af7fe5b1-7473-4b56-9d55-0ff15d329e5b","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"4f1ef0e4-f4fb-49d0-8c77-b850468bacc7","type":"Circle"},{"attributes":{},"id":"417a3b97-947a-45e3-86b7-9a911dddf44d","type":"BasicTicker"},{"attributes":{},"id":"bb7b6e97-1b54-4fd3-8e67-4e7111dedf58","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[-6.283185307179586,-6.183185307179587,-6.083185307179587,-5.983185307179587,-5.883185307179588,-5.783185307179588,-5.683185307179588,-5.583185307179589,-5.483185307179589,-5.383185307179589,-5.28318530717959,-5.18318530717959,-5.0831853071795905,-4.983185307179591,-4.883185307179591,-4.783185307179592,-4.683185307179592,-4.583185307179592,-4.483185307179593,-4.383185307179593,-4.283185307179593,-4.183185307179594,-4.083185307179594,-3.9831853071795944,-3.8831853071795948,-3.783185307179595,-3.6831853071795955,-3.583185307179596,-3.483185307179596,-3.3831853071795965,-3.283185307179597,-3.1831853071795972,-3.0831853071795976,-2.983185307179598,-2.8831853071795983,-2.7831853071795987,-2.683185307179599,-2.5831853071795994,-2.4831853071795997,-2.3831853071796,-2.2831853071796004,-2.183185307179601,-2.083185307179601,-1.9831853071796015,-1.8831853071796019,-1.7831853071796022,-1.6831853071796026,-1.583185307179603,-1.4831853071796033,-1.3831853071796036,-1.283185307179604,-1.1831853071796044,-1.0831853071796047,-0.9831853071796051,-0.8831853071796054,-0.7831853071796058,-0.6831853071796061,-0.5831853071796065,-0.48318530717960684,-0.3831853071796072,-0.28318530717960755,-0.1831853071796079,-0.08318530717960826,0.016814692820391386,0.11681469282039103,0.21681469282039068,0.3168146928203903,0.41681469282038996,0.5168146928203896,0.6168146928203893,0.7168146928203889,0.8168146928203885,0.9168146928203882,1.0168146928203878,1.1168146928203875,1.2168146928203871,1.3168146928203868,1.4168146928203864,1.516814692820386,1.6168146928203857,1.7168146928203853,1.816814692820385,1.9168146928203846,2.0168146928203843,2.116814692820384,2.2168146928203836,2.316814692820383,2.416814692820383,2.5168146928203825,2.616814692820382,2.716814692820382,2.8168146928203814,2.916814692820381,3.0168146928203807,3.1168146928203804,3.21681469282038,3.3168146928203797,3.4168146928203793,3.516814692820379,3.6168146928203786,3.7168146928203782,3.816814692820378,3.9168146928203775,4.016814692820377,4.116814692820377,4.2168146928203765,4.316814692820376,4.416814692820376,4.516814692820375,4.616814692820375,4.716814692820375,4.816814692820374,4.916814692820374,5.016814692820374,5.116814692820373,5.216814692820373,5.316814692820373,5.416814692820372,5.516814692820372,5.6168146928203715,5.716814692820371,5.816814692820371,5.91681469282037,6.01681469282037,6.11681469282037,6.216814692820369],"y":[0.0,0.8,1.6,2.4000000000000004,3.2,4.0,4.800000000000001,5.6000000000000005,6.4,7.2,8.0,8.8,9.600000000000001,10.4,11.200000000000001,12.0,12.8,13.600000000000001,14.4,15.200000000000001,16.0,16.8,17.6,18.400000000000002,19.200000000000003,20.0,20.8,21.6,22.400000000000002,23.200000000000003,24.0,24.8,25.6,26.400000000000002,27.200000000000003,28.0,28.8,29.6,30.400000000000002,31.200000000000003,32.0,32.800000000000004,33.6,34.4,35.2,36.0,36.800000000000004,37.6,38.400000000000006,39.2,40.0,40.800000000000004,41.6,42.400000000000006,43.2,44.0,44.800000000000004,45.6,46.400000000000006,47.2,48.0,48.800000000000004,49.6,50.400000000000006,51.2,52.0,52.800000000000004,53.6,54.400000000000006,55.2,56.0,56.800000000000004,57.6,58.400000000000006,59.2,60.0,60.800000000000004,61.6,62.400000000000006,63.2,64.0,64.8,65.60000000000001,66.4,67.2,68.0,68.8,69.60000000000001,70.4,71.2,72.0,72.8,73.60000000000001,74.4,75.2,76.0,76.80000000000001,77.60000000000001,78.4,79.2,80.0,80.80000000000001,81.60000000000001,82.4,83.2,84.0,84.80000000000001,85.60000000000001,86.4,87.2,88.0,88.80000000000001,89.60000000000001,90.4,91.2,92.0,92.80000000000001,93.60000000000001,94.4,95.2,96.0,96.80000000000001,97.60000000000001,98.4,99.2,100.0]}},"id":"d4eb3f31-8f79-4126-9ec5-6b2ceff670b0","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"aafee419-abbc-429b-af92-ee3f2c0274af","type":"BasicTickFormatter"},"plot":{"id":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe","subtype":"Figure","type":"Plot"},"ticker":{"id":"271014a6-5ff0-4eca-8439-e685cb13233f","type":"BasicTicker"}},"id":"01c2402a-33a5-430f-9419-36155aa4135a","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"7c002fd3-715e-4434-b14b-e8883e95b219","type":"Circle"}],"root_ids":["8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"37b08eb7-5ab7-4fec-8b9f-73473d2eca98","elementid":"f6eb1d8f-a85e-4d1a-a611-0a2c7b876e6c","modelid":"8adcfdb0-b1ee-40e8-9856-f7d0c2acaafe"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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