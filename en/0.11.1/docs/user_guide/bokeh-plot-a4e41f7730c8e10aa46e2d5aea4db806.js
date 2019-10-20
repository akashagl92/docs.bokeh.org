
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
  };var element = document.getElementById("1166d843-96b4-46e0-b4b3-15378c423f91");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '1166d843-96b4-46e0-b4b3-15378c423f91' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"aa43d29b-480a-44db-9995-d08d22a756ad":{"roots":{"references":[{"attributes":{"plot":{"id":"0827e68b-8581-4647-a6f5-5015bbc3a9c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb215c22-ed4a-4219-942e-de99a4281154","type":"BasicTicker"}},"id":"00351bad-f1e7-418d-ab91-09375eb5d116","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"0827e68b-8581-4647-a6f5-5015bbc3a9c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3eb3422c-b98a-4684-8569-63e6cd5ea9f2","type":"BasicTicker"}},"id":"6ed66c50-0908-4a5f-a41d-fecb36c7496e","type":"Grid"},{"attributes":{"below":[{"id":"99e7a1f4-dbe6-45e3-837e-c5f32307ab94","type":"LinearAxis"}],"left":[{"id":"a0baa37f-3c45-446a-8d37-c788830faab3","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"99e7a1f4-dbe6-45e3-837e-c5f32307ab94","type":"LinearAxis"},{"id":"728559b1-2389-4b29-9f4c-95095e5184ae","type":"Grid"},{"id":"a0baa37f-3c45-446a-8d37-c788830faab3","type":"LinearAxis"},{"id":"b25c330e-f670-49a5-a374-791ad59debb0","type":"Grid"},{"id":"22c18324-9990-4eef-9bad-fd7ed09d1c9e","type":"BoxAnnotation"},{"id":"c9aa9f57-a1ea-497d-8aae-07ec48d566c1","type":"PolyAnnotation"},{"id":"2c9d1b66-cc0f-41fe-acef-5c55cf5da5a7","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"b21a8b57-2f33-40e7-88da-42cd9cc5d300","type":"ToolEvents"},"tools":[{"id":"b52d335d-08e6-4eac-8eb1-06220d539a19","type":"BoxSelectTool"},{"id":"5985660b-bdb9-4757-9f33-de29a70e899f","type":"LassoSelectTool"},{"id":"fd3f42c9-0ece-44be-8d55-7a3bac1d6d31","type":"HelpTool"}],"x_range":{"id":"584bd9e9-6775-49f8-8dd1-23eb75004eda","type":"DataRange1d"},"y_range":{"id":"57b0e783-b732-4d04-afd8-5ba05d4b359a","type":"DataRange1d"}},"id":"d3f95769-033b-41d5-a268-eec17a293ba4","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"0827e68b-8581-4647-a6f5-5015bbc3a9c7","subtype":"Figure","type":"Plot"}},"id":"d30ac387-b273-4b7f-af7b-64f83ad1bd2b","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"b3bf2183-62a0-4c9d-aead-32c9f915de9f","type":"Circle"},{"attributes":{"plot":{"id":"d3f95769-033b-41d5-a268-eec17a293ba4","subtype":"Figure","type":"Plot"},"ticker":{"id":"39f0b4e5-6d7f-48a8-ac69-89df26f03fd7","type":"BasicTicker"}},"id":"728559b1-2389-4b29-9f4c-95095e5184ae","type":"Grid"},{"attributes":{},"id":"b21a8b57-2f33-40e7-88da-42cd9cc5d300","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"c9aa9f57-a1ea-497d-8aae-07ec48d566c1","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"584bd9e9-6775-49f8-8dd1-23eb75004eda","type":"DataRange1d"},{"attributes":{},"id":"848e0e35-7119-4eb6-8ea8-f8bfd84ae27c","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"9d77ee17-bf5b-479c-bb3d-8bab18415b65","type":"LinearAxis"}],"left":[{"id":"dfd070b5-106a-44aa-af41-1aa1ee4793c6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9d77ee17-bf5b-479c-bb3d-8bab18415b65","type":"LinearAxis"},{"id":"00351bad-f1e7-418d-ab91-09375eb5d116","type":"Grid"},{"id":"dfd070b5-106a-44aa-af41-1aa1ee4793c6","type":"LinearAxis"},{"id":"6ed66c50-0908-4a5f-a41d-fecb36c7496e","type":"Grid"},{"id":"8a04090c-a605-4888-89bc-8b34a823b24c","type":"BoxAnnotation"},{"id":"ef9a48f4-37bb-4662-85b8-4301738e3a0a","type":"PolyAnnotation"},{"id":"a03fa535-4be4-491d-85bc-5fd61c995802","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"f6ad0125-c0de-4698-b2e1-b4c4b5cfccb9","type":"ToolEvents"},"tools":[{"id":"05f7e3d5-3ed8-4cdd-b331-4aae6fd7c446","type":"BoxSelectTool"},{"id":"be938d55-08c2-4c6b-8745-926bde9d650d","type":"LassoSelectTool"},{"id":"d30ac387-b273-4b7f-af7b-64f83ad1bd2b","type":"HelpTool"}],"x_range":{"id":"f86de2b6-1553-485c-8bb5-47b4463f2993","type":"DataRange1d"},"y_range":{"id":"c265652f-9c7c-4f29-b465-4437f977e5fd","type":"DataRange1d"}},"id":"0827e68b-8581-4647-a6f5-5015bbc3a9c7","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"734e917e-6736-47a3-9abd-70f5565f24fe","type":"BasicTickFormatter"},"plot":{"id":"d3f95769-033b-41d5-a268-eec17a293ba4","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e392ac8-d7dc-4ddb-aa37-a5a3e3c39b19","type":"BasicTicker"}},"id":"a0baa37f-3c45-446a-8d37-c788830faab3","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"22c18324-9990-4eef-9bad-fd7ed09d1c9e","type":"BoxAnnotation"},"plot":{"id":"d3f95769-033b-41d5-a268-eec17a293ba4","subtype":"Figure","type":"Plot"},"renderers":[{"id":"2c9d1b66-cc0f-41fe-acef-5c55cf5da5a7","type":"GlyphRenderer"}]},"id":"b52d335d-08e6-4eac-8eb1-06220d539a19","type":"BoxSelectTool"},{"attributes":{},"id":"39f0b4e5-6d7f-48a8-ac69-89df26f03fd7","type":"BasicTicker"},{"attributes":{"overlay":{"id":"ef9a48f4-37bb-4662-85b8-4301738e3a0a","type":"PolyAnnotation"},"plot":{"id":"0827e68b-8581-4647-a6f5-5015bbc3a9c7","subtype":"Figure","type":"Plot"}},"id":"be938d55-08c2-4c6b-8745-926bde9d650d","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"90cea54b-ef74-46bb-92dd-276dee686d32","type":"BasicTickFormatter"},"plot":{"id":"0827e68b-8581-4647-a6f5-5015bbc3a9c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"cb215c22-ed4a-4219-942e-de99a4281154","type":"BasicTicker"}},"id":"9d77ee17-bf5b-479c-bb3d-8bab18415b65","type":"LinearAxis"},{"attributes":{"data_source":{"id":"a79c41b3-c97e-4b2d-a4c9-756b8596cbf0","type":"ColumnDataSource"},"glyph":{"id":"7e8999c6-67a4-4042-b4c2-000e2faf956d","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"bdf440bf-48fd-4331-b811-dde85a7dbc3c","type":"Circle"},"selection_glyph":null},"id":"a03fa535-4be4-491d-85bc-5fd61c995802","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"xs_units":"screen","ys_units":"screen"},"id":"ef9a48f4-37bb-4662-85b8-4301738e3a0a","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"8a04090c-a605-4888-89bc-8b34a823b24c","type":"BoxAnnotation"},"plot":{"id":"0827e68b-8581-4647-a6f5-5015bbc3a9c7","subtype":"Figure","type":"Plot"},"renderers":[{"id":"a03fa535-4be4-491d-85bc-5fd61c995802","type":"GlyphRenderer"}]},"id":"05f7e3d5-3ed8-4cdd-b331-4aae6fd7c446","type":"BoxSelectTool"},{"attributes":{},"id":"734e917e-6736-47a3-9abd-70f5565f24fe","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y0","y1"],"data":{"x":[-20,-19,-18,-17,-16,-15,-14,-13,-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y0":[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"y1":[400,361,324,289,256,225,196,169,144,121,100,81,64,49,36,25,16,9,4,1,0,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400]}},"id":"a79c41b3-c97e-4b2d-a4c9-756b8596cbf0","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"57b0e783-b732-4d04-afd8-5ba05d4b359a","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"7e8999c6-67a4-4042-b4c2-000e2faf956d","type":"Circle"},{"attributes":{},"id":"cb215c22-ed4a-4219-942e-de99a4281154","type":"BasicTicker"},{"attributes":{},"id":"90cea54b-ef74-46bb-92dd-276dee686d32","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"d3f95769-033b-41d5-a268-eec17a293ba4","subtype":"Figure","type":"Plot"}},"id":"fd3f42c9-0ece-44be-8d55-7a3bac1d6d31","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"22c18324-9990-4eef-9bad-fd7ed09d1c9e","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"d3f95769-033b-41d5-a268-eec17a293ba4","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e392ac8-d7dc-4ddb-aa37-a5a3e3c39b19","type":"BasicTicker"}},"id":"b25c330e-f670-49a5-a374-791ad59debb0","type":"Grid"},{"attributes":{},"id":"28da80aa-9c2e-41a0-8614-796b9ff0b922","type":"BasicTickFormatter"},{"attributes":{},"id":"3eb3422c-b98a-4684-8569-63e6cd5ea9f2","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f86de2b6-1553-485c-8bb5-47b4463f2993","type":"DataRange1d"},{"attributes":{"data_source":{"id":"a79c41b3-c97e-4b2d-a4c9-756b8596cbf0","type":"ColumnDataSource"},"glyph":{"id":"b3bf2183-62a0-4c9d-aead-32c9f915de9f","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"2b50818b-da2f-43eb-8f76-c2d4ddbe4e65","type":"Circle"},"selection_glyph":null},"id":"2c9d1b66-cc0f-41fe-acef-5c55cf5da5a7","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"0827e68b-8581-4647-a6f5-5015bbc3a9c7","subtype":"Figure","type":"Plot"},{"id":"d3f95769-033b-41d5-a268-eec17a293ba4","subtype":"Figure","type":"Plot"}]]},"id":"c4d399c7-43e9-4709-a0ff-d2e87f408a98","type":"GridPlot"},{"attributes":{"callback":null},"id":"c265652f-9c7c-4f29-b465-4437f977e5fd","type":"DataRange1d"},{"attributes":{"overlay":{"id":"c9aa9f57-a1ea-497d-8aae-07ec48d566c1","type":"PolyAnnotation"},"plot":{"id":"d3f95769-033b-41d5-a268-eec17a293ba4","subtype":"Figure","type":"Plot"}},"id":"5985660b-bdb9-4757-9f33-de29a70e899f","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"848e0e35-7119-4eb6-8ea8-f8bfd84ae27c","type":"BasicTickFormatter"},"plot":{"id":"0827e68b-8581-4647-a6f5-5015bbc3a9c7","subtype":"Figure","type":"Plot"},"ticker":{"id":"3eb3422c-b98a-4684-8569-63e6cd5ea9f2","type":"BasicTicker"}},"id":"dfd070b5-106a-44aa-af41-1aa1ee4793c6","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y0"}},"id":"bdf440bf-48fd-4331-b811-dde85a7dbc3c","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"8a04090c-a605-4888-89bc-8b34a823b24c","type":"BoxAnnotation"},{"attributes":{},"id":"1e392ac8-d7dc-4ddb-aa37-a5a3e3c39b19","type":"BasicTicker"},{"attributes":{},"id":"f6ad0125-c0de-4698-b2e1-b4c4b5cfccb9","type":"ToolEvents"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"2b50818b-da2f-43eb-8f76-c2d4ddbe4e65","type":"Circle"},{"attributes":{"formatter":{"id":"28da80aa-9c2e-41a0-8614-796b9ff0b922","type":"BasicTickFormatter"},"plot":{"id":"d3f95769-033b-41d5-a268-eec17a293ba4","subtype":"Figure","type":"Plot"},"ticker":{"id":"39f0b4e5-6d7f-48a8-ac69-89df26f03fd7","type":"BasicTicker"}},"id":"99e7a1f4-dbe6-45e3-837e-c5f32307ab94","type":"LinearAxis"}],"root_ids":["c4d399c7-43e9-4709-a0ff-d2e87f408a98"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"aa43d29b-480a-44db-9995-d08d22a756ad","elementid":"1166d843-96b4-46e0-b4b3-15378c423f91","modelid":"c4d399c7-43e9-4709-a0ff-d2e87f408a98"}];
          
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