
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
  };var element = document.getElementById("a2580705-7eeb-4d30-8d6d-74dc73e370ce");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'a2580705-7eeb-4d30-8d6d-74dc73e370ce' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"b7fda47a-9939-49ed-b5ec-76f6278bdddc":{"roots":{"references":[{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"3f0c9d8e-9618-47e2-b804-cea6f1e7077d","type":"Line"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.2,0.2,0.2,0.2,0.21,0.21,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.24,0.24,0.26,0.26,0.27,0.27,0.28,0.28,0.28,0.28,0.29,0.29,0.32,0.32,0.33,0.33,0.34,0.34,0.35]}},"id":"af3baba7-ddf8-4a76-85c2-8e796878efab","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"}},"id":"d8a1e7d0-65fa-49dc-985a-f6e44a05dd4c","type":"PanTool"},{"attributes":{"overlay":{"id":"2690413d-54e1-4b3b-a7b5-ead6059c0f9d","type":"BoxAnnotation"},"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"}},"id":"7218576e-adcb-44e0-a25f-bbf794bb957d","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"686a9510-c4d9-47ab-81a9-5c67b717467b","type":"BasicTicker"}},"id":"fe7f10ca-c1b6-4a88-b225-95def3cb1cfc","type":"Grid"},{"attributes":{"below":[{"id":"93ae33d1-9b0c-4f9a-ba1c-c7fa30c05e41","type":"LinearAxis"}],"left":[{"id":"302bce3c-939a-4b6c-bcbb-91b5e7978030","type":"LinearAxis"}],"legend":true,"plot_height":400,"plot_width":400,"renderers":[{"id":"2690413d-54e1-4b3b-a7b5-ead6059c0f9d","type":"BoxAnnotation"},{"id":"8fd41165-4402-4cc3-ab64-e9dcd771c90b","type":"GlyphRenderer"},{"id":"ade40f36-93d7-4f9e-a8bc-9c3aa87d4005","type":"GlyphRenderer"},{"id":"5709746c-ac36-4258-a7e8-dc73947d7e08","type":"Legend"},{"id":"93ae33d1-9b0c-4f9a-ba1c-c7fa30c05e41","type":"LinearAxis"},{"id":"302bce3c-939a-4b6c-bcbb-91b5e7978030","type":"LinearAxis"},{"id":"5015b45c-51f4-4c21-ae8b-f7138547099f","type":"Grid"},{"id":"fe7f10ca-c1b6-4a88-b225-95def3cb1cfc","type":"Grid"}],"title":"U.S. Postage Rates (1999-2015)","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"084b625e-5952-431a-8d56-7d3f17653325","type":"ToolEvents"},"tools":[{"id":"d8a1e7d0-65fa-49dc-985a-f6e44a05dd4c","type":"PanTool"},{"id":"e17e3240-0b85-4bd8-93af-e1e0c8edb650","type":"WheelZoomTool"},{"id":"7218576e-adcb-44e0-a25f-bbf794bb957d","type":"BoxZoomTool"},{"id":"d11b9d66-97ff-42a9-adb9-d8ae53ac5216","type":"PreviewSaveTool"},{"id":"22eb2839-f011-4508-9136-4c21beb14b3f","type":"ResizeTool"},{"id":"c69cc0b5-bdbd-4106-809a-555baf2529e3","type":"ResetTool"},{"id":"105d048b-1cc3-47eb-b4b0-2e99e6412315","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"f13ce9cd-cdb4-4ddd-87d8-1dfe64608d16","type":"Range1d"},"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"b0f6c5ef-762d-4c15-9dfa-a60d9e822f4b","type":"Range1d"},"yscale":"auto"},"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"},{"attributes":{"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"}},"id":"d11b9d66-97ff-42a9-adb9-d8ae53ac5216","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"}},"id":"e17e3240-0b85-4bd8-93af-e1e0c8edb650","type":"WheelZoomTool"},{"attributes":{},"id":"73dbce55-f127-42dd-96f5-5ede9b39a910","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2690413d-54e1-4b3b-a7b5-ead6059c0f9d","type":"BoxAnnotation"},{"attributes":{"legends":[["stamp",[{"id":"8fd41165-4402-4cc3-ab64-e9dcd771c90b","type":"GlyphRenderer"}]],["postcard",[{"id":"ade40f36-93d7-4f9e-a8bc-9c3aa87d4005","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"}},"id":"5709746c-ac36-4258-a7e8-dc73947d7e08","type":"Legend"},{"attributes":{"callback":null,"end":0.519,"start":0.171},"id":"b0f6c5ef-762d-4c15-9dfa-a60d9e822f4b","type":"Range1d"},{"attributes":{"line_color":{"value":"#5ab738"},"line_dash":[6],"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"7fc323e5-75dc-4430-a992-85a0625d9a74","type":"Line"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],"x_values":[0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16],"y_values":[0.33,0.33,0.33,0.33,0.34,0.34,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.37,0.39,0.39,0.41,0.41,0.42,0.42,0.44,0.44,0.44,0.44,0.44,0.44,0.45,0.45,0.46,0.46,0.49,0.49,0.49]}},"id":"05554599-b6b7-42c7-bea4-8148416846a2","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":17.6,"start":-1.6},"id":"f13ce9cd-cdb4-4ddd-87d8-1dfe64608d16","type":"Range1d"},{"attributes":{},"id":"084b625e-5952-431a-8d56-7d3f17653325","type":"ToolEvents"},{"attributes":{"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"290b13da-6d02-47e1-bc09-df9f2bfbcc60","type":"BasicTicker"}},"id":"5015b45c-51f4-4c21-ae8b-f7138547099f","type":"Grid"},{"attributes":{},"id":"686a9510-c4d9-47ab-81a9-5c67b717467b","type":"BasicTicker"},{"attributes":{"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"}},"id":"22eb2839-f011-4508-9136-4c21beb14b3f","type":"ResizeTool"},{"attributes":{},"id":"290b13da-6d02-47e1-bc09-df9f2bfbcc60","type":"BasicTicker"},{"attributes":{"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"}},"id":"c69cc0b5-bdbd-4106-809a-555baf2529e3","type":"ResetTool"},{"attributes":{},"id":"7e9dfe8c-e2a1-47b3-a396-cb5dcb4a90a2","type":"BasicTickFormatter"},{"attributes":{"axis_label":"index","formatter":{"id":"73dbce55-f127-42dd-96f5-5ede9b39a910","type":"BasicTickFormatter"},"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"290b13da-6d02-47e1-bc09-df9f2bfbcc60","type":"BasicTicker"}},"id":"93ae33d1-9b0c-4f9a-ba1c-c7fa30c05e41","type":"LinearAxis"},{"attributes":{"axis_label":"Rate per ounce","formatter":{"id":"7e9dfe8c-e2a1-47b3-a396-cb5dcb4a90a2","type":"BasicTickFormatter"},"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"},"ticker":{"id":"686a9510-c4d9-47ab-81a9-5c67b717467b","type":"BasicTicker"}},"id":"302bce3c-939a-4b6c-bcbb-91b5e7978030","type":"LinearAxis"},{"attributes":{"data_source":{"id":"af3baba7-ddf8-4a76-85c2-8e796878efab","type":"ColumnDataSource"},"glyph":{"id":"3f0c9d8e-9618-47e2-b804-cea6f1e7077d","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"ade40f36-93d7-4f9e-a8bc-9c3aa87d4005","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"aa3403f7-5d5d-473a-987d-324acba432d4","subtype":"Chart","type":"Plot"}},"id":"105d048b-1cc3-47eb-b4b0-2e99e6412315","type":"HelpTool"},{"attributes":{"data_source":{"id":"05554599-b6b7-42c7-bea4-8148416846a2","type":"ColumnDataSource"},"glyph":{"id":"7fc323e5-75dc-4430-a992-85a0625d9a74","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8fd41165-4402-4cc3-ab64-e9dcd771c90b","type":"GlyphRenderer"}],"root_ids":["aa3403f7-5d5d-473a-987d-324acba432d4"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"b7fda47a-9939-49ed-b5ec-76f6278bdddc","elementid":"a2580705-7eeb-4d30-8d6d-74dc73e370ce","modelid":"aa3403f7-5d5d-473a-987d-324acba432d4"}];
          
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