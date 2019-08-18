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
      };var element = document.getElementById("824e06dc-eeef-448f-a2e4-da9d20fd22cb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '824e06dc-eeef-448f-a2e4-da9d20fd22cb' but no matching script tag was found. ")
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
                  var docs_json = {"cce00f61-bdbc-4bf3-9b35-114246df9392":{"roots":{"references":[{"attributes":{"data_source":{"id":"30140540-9fb7-4644-868c-e8ea0691a271","type":"ColumnDataSource"},"glyph":{"id":"08be9a44-d1f0-45de-bd6b-632f2a76eb2b","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"91cf7ace-a52a-4be8-af0d-d08823310996","type":"Circle"},"selection_glyph":null},"id":"2fbb8cd1-ebc8-4b5d-9275-88ce9818e37a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"}},"id":"9f66ce9b-9611-4381-83a3-dbb937a1d9be","type":"HelpTool"},{"attributes":{"below":[{"id":"cf2f722b-1d03-43ea-863c-03f6d601fd28","type":"LinearAxis"}],"left":[{"id":"260bc67c-a24a-4ef3-aa5c-c880875be123","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"cf2f722b-1d03-43ea-863c-03f6d601fd28","type":"LinearAxis"},{"id":"793bd6a9-15ec-4c56-b802-1da72479ef3b","type":"Grid"},{"id":"260bc67c-a24a-4ef3-aa5c-c880875be123","type":"LinearAxis"},{"id":"89814ee5-b397-4eb0-8ab9-5fa3c9a5856e","type":"Grid"},{"id":"5baa8f4a-19e6-4cc8-a5ca-bd593c86ce41","type":"BoxAnnotation"},{"id":"cf3f523d-5577-4f04-9cfb-577cd540924a","type":"GlyphRenderer"}],"title":{"id":"7ed0fdd9-4f98-4726-9cd2-7cf6e7852414","type":"Title"},"tool_events":{"id":"cfdd72db-6dac-42c4-95e9-2d4b4fb5541d","type":"ToolEvents"},"toolbar":{"id":"aee1a1e6-4fe7-444b-8fd4-d7792a1db070","type":"Toolbar"},"x_range":{"id":"457d75e8-3693-4950-b719-1e413b511b4c","type":"DataRange1d"},"y_range":{"id":"42ebefd8-4ef2-41e3-a445-6605ad200f09","type":"DataRange1d"}},"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"d313c773-8ca9-4bfb-bfd8-55e95da0e9f0","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"}},"id":"cfd3612a-40a3-4b5c-95a1-f4964524dbec","type":"ResetTool"},{"attributes":{},"id":"cfdd72db-6dac-42c4-95e9-2d4b4fb5541d","type":"ToolEvents"},{"attributes":{},"id":"a5f5974c-25bb-4a60-9f22-9c42c2c517dc","type":"BasicTicker"},{"attributes":{},"id":"a002025f-e20a-48a7-85cc-421980396c13","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"2c27e6ce-d6c6-4808-a145-861555c46c59","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"91cf7ace-a52a-4be8-af0d-d08823310996","type":"Circle"},{"attributes":{"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"}},"id":"f27ce6b2-c891-4c26-a85a-0efb0dc57f8b","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c6a9d18c-d1be-45d6-87dd-691e6e401574","type":"PanTool"},{"id":"f5e1fc17-bd9f-49b7-9ed7-1151b5e7ca4f","type":"WheelZoomTool"},{"id":"8eb47129-8805-4560-b5a3-b4c35d079740","type":"BoxZoomTool"},{"id":"9c4a6989-8c33-45b8-aa5a-a430b930c98f","type":"SaveTool"},{"id":"4efe880b-be9c-4ebf-8e1a-c84ace6a8ec6","type":"ResetTool"},{"id":"47500ce0-f96c-4741-a86c-7640d69b3f57","type":"HelpTool"}]},"id":"4321e8ec-769f-4978-b20e-d4a0b27f0c8c","type":"Toolbar"},{"attributes":{},"id":"ce325f22-d1c8-4a1d-b0da-f4ce2c110d44","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"}},"id":"9c4a6989-8c33-45b8-aa5a-a430b930c98f","type":"SaveTool"},{"attributes":{"formatter":{"id":"d313c773-8ca9-4bfb-bfd8-55e95da0e9f0","type":"BasicTickFormatter"},"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5f5974c-25bb-4a60-9f22-9c42c2c517dc","type":"BasicTicker"}},"id":"39caa6b4-9459-4eea-8d2e-e31e974cdc62","type":"LinearAxis"},{"attributes":{},"id":"559f5d9e-62b5-4bdc-beba-954ace58df11","type":"BasicTicker"},{"attributes":{"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a5f5974c-25bb-4a60-9f22-9c42c2c517dc","type":"BasicTicker"}},"id":"1b3ad9a1-f459-4e2a-96c4-482ee6ee2ba9","type":"Grid"},{"attributes":{"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"}},"id":"c6a9d18c-d1be-45d6-87dd-691e6e401574","type":"PanTool"},{"attributes":{},"id":"b6b8b48f-50f4-470e-90ad-64c5c564acc1","type":"BasicTicker"},{"attributes":{"formatter":{"id":"5742db4d-6cf6-4b1b-9922-1922b29fd4e8","type":"BasicTickFormatter"},"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6b8b48f-50f4-470e-90ad-64c5c564acc1","type":"BasicTicker"}},"id":"260bc67c-a24a-4ef3-aa5c-c880875be123","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"4fad57c5-e105-4d9c-8971-423594dacc7b","type":"Line"},{"attributes":{"callback":null,"tabs":[{"id":"ceb216f9-d74f-46cf-b642-e984beedbacf","type":"Panel"},{"id":"88d094da-0758-4907-9cd8-c4b5e21019d7","type":"Panel"}]},"id":"605058ca-0f7e-41f9-9033-9fd70ab6d63b","type":"Tabs"},{"attributes":{"callback":null},"id":"e416b178-28f2-489b-a3c7-e4231e393896","type":"DataRange1d"},{"attributes":{},"id":"5742db4d-6cf6-4b1b-9922-1922b29fd4e8","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":null},"id":"78786b83-83c4-4da5-bf69-bd74c6b995da","type":"Title"},{"attributes":{"formatter":{"id":"ce325f22-d1c8-4a1d-b0da-f4ce2c110d44","type":"BasicTickFormatter"},"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a002025f-e20a-48a7-85cc-421980396c13","type":"BasicTicker"}},"id":"c655e11a-823b-4850-8c89-1a79fa8b2091","type":"LinearAxis"},{"attributes":{"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"}},"id":"47500ce0-f96c-4741-a86c-7640d69b3f57","type":"HelpTool"},{"attributes":{"overlay":{"id":"ddde24f8-612a-493b-b987-08239469a59e","type":"BoxAnnotation"},"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"}},"id":"8eb47129-8805-4560-b5a3-b4c35d079740","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"fe2a892c-bb34-474a-a6f3-7c3ae9ed8e1f","type":"DataRange1d"},{"attributes":{},"id":"5afc3d81-fe3f-491f-8985-bc74fa9a0fc5","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"39caa6b4-9459-4eea-8d2e-e31e974cdc62","type":"LinearAxis"}],"left":[{"id":"c655e11a-823b-4850-8c89-1a79fa8b2091","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"39caa6b4-9459-4eea-8d2e-e31e974cdc62","type":"LinearAxis"},{"id":"1b3ad9a1-f459-4e2a-96c4-482ee6ee2ba9","type":"Grid"},{"id":"c655e11a-823b-4850-8c89-1a79fa8b2091","type":"LinearAxis"},{"id":"2351d3a3-eb31-424f-be74-d38ae08fc5ce","type":"Grid"},{"id":"ddde24f8-612a-493b-b987-08239469a59e","type":"BoxAnnotation"},{"id":"2fbb8cd1-ebc8-4b5d-9275-88ce9818e37a","type":"GlyphRenderer"}],"title":{"id":"78786b83-83c4-4da5-bf69-bd74c6b995da","type":"Title"},"tool_events":{"id":"b1e26d5e-24c9-42dc-988f-a90ec3198fd9","type":"ToolEvents"},"toolbar":{"id":"4321e8ec-769f-4978-b20e-d4a0b27f0c8c","type":"Toolbar"},"x_range":{"id":"fe2a892c-bb34-474a-a6f3-7c3ae9ed8e1f","type":"DataRange1d"},"y_range":{"id":"e416b178-28f2-489b-a3c7-e4231e393896","type":"DataRange1d"}},"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b1e26d5e-24c9-42dc-988f-a90ec3198fd9","type":"ToolEvents"},{"attributes":{"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"},"ticker":{"id":"559f5d9e-62b5-4bdc-beba-954ace58df11","type":"BasicTicker"}},"id":"793bd6a9-15ec-4c56-b802-1da72479ef3b","type":"Grid"},{"attributes":{"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"}},"id":"15b712ec-2c59-489c-9939-87eac12da220","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"08be9a44-d1f0-45de-bd6b-632f2a76eb2b","type":"Circle"},{"attributes":{"plot":null,"text":null},"id":"7ed0fdd9-4f98-4726-9cd2-7cf6e7852414","type":"Title"},{"attributes":{"formatter":{"id":"5afc3d81-fe3f-491f-8985-bc74fa9a0fc5","type":"BasicTickFormatter"},"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"},"ticker":{"id":"559f5d9e-62b5-4bdc-beba-954ace58df11","type":"BasicTicker"}},"id":"cf2f722b-1d03-43ea-863c-03f6d601fd28","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ddde24f8-612a-493b-b987-08239469a59e","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"457d75e8-3693-4950-b719-1e413b511b4c","type":"DataRange1d"},{"attributes":{"child":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"},"title":"line"},"id":"88d094da-0758-4907-9cd8-c4b5e21019d7","type":"Panel"},{"attributes":{"dimension":1,"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"a002025f-e20a-48a7-85cc-421980396c13","type":"BasicTicker"}},"id":"2351d3a3-eb31-424f-be74-d38ae08fc5ce","type":"Grid"},{"attributes":{"data_source":{"id":"d5725246-4310-4535-b321-0c2137db6ad7","type":"ColumnDataSource"},"glyph":{"id":"2c27e6ce-d6c6-4808-a145-861555c46c59","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"4fad57c5-e105-4d9c-8971-423594dacc7b","type":"Line"},"selection_glyph":null},"id":"cf3f523d-5577-4f04-9cfb-577cd540924a","type":"GlyphRenderer"},{"attributes":{"child":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"ceb216f9-d74f-46cf-b642-e984beedbacf","type":"Panel"},{"attributes":{"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"}},"id":"f5e1fc17-bd9f-49b7-9ed7-1151b5e7ca4f","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"},"ticker":{"id":"b6b8b48f-50f4-470e-90ad-64c5c564acc1","type":"BasicTicker"}},"id":"89814ee5-b397-4eb0-8ab9-5fa3c9a5856e","type":"Grid"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"334cd379-522e-4907-9fdf-1c3c1b9069db","type":"PanTool"},{"id":"f27ce6b2-c891-4c26-a85a-0efb0dc57f8b","type":"WheelZoomTool"},{"id":"3848542a-1287-4033-89d3-4d81fe7e57d8","type":"BoxZoomTool"},{"id":"15b712ec-2c59-489c-9939-87eac12da220","type":"SaveTool"},{"id":"cfd3612a-40a3-4b5c-95a1-f4964524dbec","type":"ResetTool"},{"id":"9f66ce9b-9611-4381-83a3-dbb937a1d9be","type":"HelpTool"}]},"id":"aee1a1e6-4fe7-444b-8fd4-d7792a1db070","type":"Toolbar"},{"attributes":{"plot":{"id":"2b8188a3-5627-4672-8b4b-d5327fa310d3","subtype":"Figure","type":"Plot"}},"id":"4efe880b-be9c-4ebf-8e1a-c84ace6a8ec6","type":"ResetTool"},{"attributes":{"overlay":{"id":"5baa8f4a-19e6-4cc8-a5ca-bd593c86ce41","type":"BoxAnnotation"},"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"}},"id":"3848542a-1287-4033-89d3-4d81fe7e57d8","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"d5725246-4310-4535-b321-0c2137db6ad7","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"30140540-9fb7-4644-868c-e8ea0691a271","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5baa8f4a-19e6-4cc8-a5ca-bd593c86ce41","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"42ebefd8-4ef2-41e3-a445-6605ad200f09","type":"DataRange1d"},{"attributes":{"plot":{"id":"c1fe6227-c0fb-43cd-a127-6ffb1d600e97","subtype":"Figure","type":"Plot"}},"id":"334cd379-522e-4907-9fdf-1c3c1b9069db","type":"PanTool"}],"root_ids":["605058ca-0f7e-41f9-9033-9fd70ab6d63b"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"cce00f61-bdbc-4bf3-9b35-114246df9392","elementid":"824e06dc-eeef-448f-a2e4-da9d20fd22cb","modelid":"605058ca-0f7e-41f9-9033-9fd70ab6d63b"}];
                  
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