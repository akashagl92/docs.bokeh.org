
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
  };var element = document.getElementById("7661e97e-4cd7-43dc-8f0b-ed15326a33cc");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7661e97e-4cd7-43dc-8f0b-ed15326a33cc' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"30772343-8694-4054-a2c6-94c357f7c523":{"roots":{"references":[{"attributes":{},"id":"1af64ae2-bed0-492f-a751-3186d48af754","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.2},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"9722fceb-9815-48aa-bfa7-482c3da2d812","type":"Annulus"},{"attributes":{"fill_color":{"value":"#7FC97F"},"inner_radius":{"units":"data","value":0.2},"line_color":{"value":"#7FC97F"},"outer_radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"52c64b28-07d0-479f-bbb2-1095f0fe94b1","type":"Annulus"},{"attributes":{"data_source":{"id":"432bbeee-4876-4293-af04-48f714e571de","type":"ColumnDataSource"},"glyph":{"id":"52c64b28-07d0-479f-bbb2-1095f0fe94b1","type":"Annulus"},"hover_glyph":null,"nonselection_glyph":{"id":"9722fceb-9815-48aa-bfa7-482c3da2d812","type":"Annulus"},"selection_glyph":null},"id":"d3c6ab7a-b561-4501-93e6-397bfedf3f62","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9efed3b-870b-4cb0-8aff-fcd29047d574","type":"BasicTicker"}},"id":"f0541c71-0cb5-453a-93cd-14d9c5ee7b17","type":"Grid"},{"attributes":{"below":[{"id":"dc3f93ab-a9f6-4daa-97bb-80459db79344","type":"LinearAxis"}],"left":[{"id":"08e3b284-22dd-4e19-b67c-1799880691b3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"dc3f93ab-a9f6-4daa-97bb-80459db79344","type":"LinearAxis"},{"id":"ad0e09f5-ca25-4442-adac-c36b18aec001","type":"Grid"},{"id":"08e3b284-22dd-4e19-b67c-1799880691b3","type":"LinearAxis"},{"id":"f0541c71-0cb5-453a-93cd-14d9c5ee7b17","type":"Grid"},{"id":"6901336b-1a38-4d84-8b60-3a0c2ee29f30","type":"BoxAnnotation"},{"id":"d3c6ab7a-b561-4501-93e6-397bfedf3f62","type":"GlyphRenderer"}],"tool_events":{"id":"1af64ae2-bed0-492f-a751-3186d48af754","type":"ToolEvents"},"tools":[{"id":"e5cd3c47-a6e1-4c40-929a-19351939089c","type":"PanTool"},{"id":"ddbea86e-9341-4f93-a9dd-1a3d73af32e1","type":"WheelZoomTool"},{"id":"fc4070d3-3366-49f8-8b1e-e590dd80182d","type":"BoxZoomTool"},{"id":"65765577-7f85-41a5-aece-88696787f836","type":"PreviewSaveTool"},{"id":"c19ace36-bbc3-4421-a09e-4065bc1914ea","type":"ResizeTool"},{"id":"ca33eeee-51fb-48b3-90db-d842cbff16a9","type":"ResetTool"},{"id":"2d67aec1-4b83-43b3-b082-8a36436c0e40","type":"HelpTool"}],"x_range":{"id":"369caa2e-3e29-4105-9297-586684be9472","type":"DataRange1d"},"y_range":{"id":"cdd3eff0-b596-4abb-a95c-7ebf09a47356","type":"DataRange1d"}},"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"}},"id":"c19ace36-bbc3-4421-a09e-4065bc1914ea","type":"ResizeTool"},{"attributes":{},"id":"69e62533-deb7-4b71-8b87-5b5d27f34aec","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6901336b-1a38-4d84-8b60-3a0c2ee29f30","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"369caa2e-3e29-4105-9297-586684be9472","type":"DataRange1d"},{"attributes":{},"id":"7ad298c2-1789-4870-8323-3420ff783415","type":"BasicTicker"},{"attributes":{"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"}},"id":"65765577-7f85-41a5-aece-88696787f836","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"cdd3eff0-b596-4abb-a95c-7ebf09a47356","type":"DataRange1d"},{"attributes":{"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"}},"id":"2d67aec1-4b83-43b3-b082-8a36436c0e40","type":"HelpTool"},{"attributes":{"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"}},"id":"ddbea86e-9341-4f93-a9dd-1a3d73af32e1","type":"WheelZoomTool"},{"attributes":{},"id":"b9efed3b-870b-4cb0-8aff-fcd29047d574","type":"BasicTicker"},{"attributes":{"formatter":{"id":"69e62533-deb7-4b71-8b87-5b5d27f34aec","type":"BasicTickFormatter"},"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"},"ticker":{"id":"b9efed3b-870b-4cb0-8aff-fcd29047d574","type":"BasicTicker"}},"id":"08e3b284-22dd-4e19-b67c-1799880691b3","type":"LinearAxis"},{"attributes":{"overlay":{"id":"6901336b-1a38-4d84-8b60-3a0c2ee29f30","type":"BoxAnnotation"},"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"}},"id":"fc4070d3-3366-49f8-8b1e-e590dd80182d","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"}},"id":"e5cd3c47-a6e1-4c40-929a-19351939089c","type":"PanTool"},{"attributes":{},"id":"247bfb97-a6e9-4c04-b9d0-ef7c8ab6b0c7","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"}},"id":"ca33eeee-51fb-48b3-90db-d842cbff16a9","type":"ResetTool"},{"attributes":{"formatter":{"id":"247bfb97-a6e9-4c04-b9d0-ef7c8ab6b0c7","type":"BasicTickFormatter"},"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ad298c2-1789-4870-8323-3420ff783415","type":"BasicTicker"}},"id":"dc3f93ab-a9f6-4daa-97bb-80459db79344","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"432bbeee-4876-4293-af04-48f714e571de","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433","subtype":"Figure","type":"Plot"},"ticker":{"id":"7ad298c2-1789-4870-8323-3420ff783415","type":"BasicTicker"}},"id":"ad0e09f5-ca25-4442-adac-c36b18aec001","type":"Grid"}],"root_ids":["b1c6ff85-50a8-4a42-9e2c-e6190ef19433"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"30772343-8694-4054-a2c6-94c357f7c523","elementid":"7661e97e-4cd7-43dc-8f0b-ed15326a33cc","modelid":"b1c6ff85-50a8-4a42-9e2c-e6190ef19433"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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