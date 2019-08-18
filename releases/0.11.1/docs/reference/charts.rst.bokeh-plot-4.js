
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
  };var element = document.getElementById("8e8436f9-f57f-4f73-8dbb-b7f1ba320bce");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '8e8436f9-f57f-4f73-8dbb-b7f1ba320bce' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"8a4cc9ac-dd3f-4010-b27a-297dc73823e6":{"roots":{"references":[{"attributes":{"overlay":{"id":"ce585d02-edc3-47df-9244-40592cbad0a0","type":"BoxAnnotation"},"plot":{"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"}},"id":"4547b093-e808-4572-9930-6953851dea3f","type":"BoxZoomTool"},{"attributes":{},"id":"0dd887dc-ad45-468b-aef8-5053843de5b3","type":"BasicTickFormatter"},{"attributes":{"axis_label":"fruit","formatter":{"id":"95e19edb-5f5c-41fc-96dd-5b7f38d5c965","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"},"ticker":{"id":"ebda6bf9-3e99-45f2-9cd2-d461a6f47e76","type":"CategoricalTicker"}},"id":"0cfbd4bb-016f-4930-8277-71e84a4a57f7","type":"CategoricalAxis"},{"attributes":{"dilate":true,"fill_color":{"value":"#08519c"},"height":{"units":"data","value":0.95},"line_color":{"value":"#08519c"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d9612181-d492-414e-8ad5-42a40186fbbf","type":"Rect"},{"attributes":{"plot":{"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"}},"id":"3c53f6e2-4e1d-4d7f-a03a-b8236681253c","type":"ResetTool"},{"attributes":{"plot":{"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"}},"id":"2b74cda1-61eb-4945-9e2c-5b9e29d7244e","type":"WheelZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#3182bd"},"height":{"units":"data","value":0.95},"line_color":{"value":"#3182bd"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ab51dad-d15c-4503-9333-6fbd2a9af4fe","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"}],"fruit_count":["(3.3, 4.5]","(3.3, 4.5]","(3.3, 4.5]"],"values":[4,4,4],"x":["apples","bananas","pears"],"y":[1,3,3]}},"id":"4b396a48-fba5-434b-8f90-5a80d11a1bbf","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(6.8, 8]"}],"fruit_count":["(6.8, 8]"],"values":[8],"x":["apples"],"y":[3]}},"id":"39e79559-a0c3-4949-a966-dcd6234bfc89","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"}},"id":"77b0c2d7-5c14-4bab-9f56-6ec89ec3ff53","type":"PreviewSaveTool"},{"attributes":{"plot":{"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"}},"id":"501e237b-d155-4fea-bf8e-a2822d8395f1","type":"HelpTool"},{"attributes":{"axis_label":"sample","formatter":{"id":"0dd887dc-ad45-468b-aef8-5053843de5b3","type":"BasicTickFormatter"},"plot":{"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"},"ticker":{"id":"6d683fb1-2567-45c6-a7ca-875baabef2e1","type":"BasicTicker"}},"id":"35dd97ec-6026-417f-9f36-5ee8d64f5e1b","type":"LinearAxis"},{"attributes":{"callback":null,"factors":["apples","bananas","pears"]},"id":"4bbadfc0-4aca-43c8-af18-293c229081a2","type":"FactorRange"},{"attributes":{"data_source":{"id":"1b5b563d-f90e-44ae-b10d-dcc4c26235a5","type":"ColumnDataSource"},"glyph":{"id":"7ab51dad-d15c-4503-9333-6fbd2a9af4fe","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4158900f-9235-4bff-9ff4-ede420633edf","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(4.5, 5.7]"},{"fruit_count":"(4.5, 5.7]"}],"fruit_count":["(4.5, 5.7]","(4.5, 5.7]"],"values":[5,5],"x":["apples","pears"],"y":[2,2]}},"id":"c897e131-d761-42f1-9733-349226932b1d","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(5.7, 6.8]"}],"fruit_count":["(5.7, 6.8]"],"values":[6],"x":["pears"],"y":[1]}},"id":"1b5b563d-f90e-44ae-b10d-dcc4c26235a5","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"4b396a48-fba5-434b-8f90-5a80d11a1bbf","type":"ColumnDataSource"},"glyph":{"id":"90bc81dc-0911-4da4-be39-3b3bc19af9d0","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"87fb7c34-59ca-4da9-bdfd-abf7b6578038","type":"GlyphRenderer"},{"attributes":{},"id":"95e19edb-5f5c-41fc-96dd-5b7f38d5c965","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"bee125d2-d6e1-4a3c-8825-93f36a4ca3fd","type":"ColumnDataSource"},"glyph":{"id":"beb14035-88cb-4953-bb0a-2ff49dbc25ac","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9185fc9f-52ed-4673-b53c-7185b16756aa","type":"GlyphRenderer"},{"attributes":{},"id":"6d683fb1-2567-45c6-a7ca-875baabef2e1","type":"BasicTicker"},{"attributes":{},"id":"ebda6bf9-3e99-45f2-9cd2-d461a6f47e76","type":"CategoricalTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#9ecae1"},"height":{"units":"data","value":0.95},"line_color":{"value":"#9ecae1"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"90bc81dc-0911-4da4-be39-3b3bc19af9d0","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"[1, 2.2]"},{"fruit_count":"[1, 2.2]"}],"fruit_count":["[1, 2.2]","[1, 2.2]"],"values":[1,2],"x":["bananas","bananas"],"y":[1,2]}},"id":"bee125d2-d6e1-4a3c-8825-93f36a4ca3fd","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"c897e131-d761-42f1-9733-349226932b1d","type":"ColumnDataSource"},"glyph":{"id":"8d8c83fb-e179-4cee-ab9c-f0980c2d28e9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"93451dd6-8cd0-4384-8e09-3ce8221090e9","type":"GlyphRenderer"},{"attributes":{},"id":"c61074c6-efb4-4ebf-b762-2c4826eeec10","type":"ToolEvents"},{"attributes":{"dilate":true,"fill_color":{"value":"#c6dbef"},"height":{"units":"data","value":0.95},"line_color":{"value":"#c6dbef"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"beb14035-88cb-4953-bb0a-2ff49dbc25ac","type":"Rect"},{"attributes":{"plot":{"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"}},"id":"a23416aa-79fb-4576-9fa7-d76f352ee8e6","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#6baed6"},"height":{"units":"data","value":0.95},"line_color":{"value":"#6baed6"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d8c83fb-e179-4cee-ab9c-f0980c2d28e9","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ce585d02-edc3-47df-9244-40592cbad0a0","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":3.77,"start":0.22999999999999998},"id":"d08463bf-5e2b-40d2-9ec0-ea253aafef57","type":"Range1d"},{"attributes":{"below":[{"id":"0cfbd4bb-016f-4930-8277-71e84a4a57f7","type":"CategoricalAxis"}],"left":[{"id":"35dd97ec-6026-417f-9f36-5ee8d64f5e1b","type":"LinearAxis"}],"legend":null,"plot_height":400,"plot_width":400,"renderers":[{"id":"ce585d02-edc3-47df-9244-40592cbad0a0","type":"BoxAnnotation"},{"id":"87fb7c34-59ca-4da9-bdfd-abf7b6578038","type":"GlyphRenderer"},{"id":"93451dd6-8cd0-4384-8e09-3ce8221090e9","type":"GlyphRenderer"},{"id":"1ad9b314-977e-4cd8-9bff-9220a6d1daed","type":"GlyphRenderer"},{"id":"9185fc9f-52ed-4673-b53c-7185b16756aa","type":"GlyphRenderer"},{"id":"4158900f-9235-4bff-9ff4-ede420633edf","type":"GlyphRenderer"},{"id":"0cfbd4bb-016f-4930-8277-71e84a4a57f7","type":"CategoricalAxis"},{"id":"35dd97ec-6026-417f-9f36-5ee8d64f5e1b","type":"LinearAxis"}],"title":"Fruits","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"c61074c6-efb4-4ebf-b762-2c4826eeec10","type":"ToolEvents"},"tools":[{"id":"a23416aa-79fb-4576-9fa7-d76f352ee8e6","type":"PanTool"},{"id":"2b74cda1-61eb-4945-9e2c-5b9e29d7244e","type":"WheelZoomTool"},{"id":"4547b093-e808-4572-9930-6953851dea3f","type":"BoxZoomTool"},{"id":"77b0c2d7-5c14-4bab-9f56-6ec89ec3ff53","type":"PreviewSaveTool"},{"id":"3c10ada6-e02d-486a-9c70-173b82ef4a47","type":"ResizeTool"},{"id":"3c53f6e2-4e1d-4d7f-a03a-b8236681253c","type":"ResetTool"},{"id":"501e237b-d155-4fea-bf8e-a2822d8395f1","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"4bbadfc0-4aca-43c8-af18-293c229081a2","type":"FactorRange"},"xgrid":false,"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"d08463bf-5e2b-40d2-9ec0-ea253aafef57","type":"Range1d"},"ygrid":false,"yscale":"auto"},"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"39e79559-a0c3-4949-a966-dcd6234bfc89","type":"ColumnDataSource"},"glyph":{"id":"d9612181-d492-414e-8ad5-42a40186fbbf","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1ad9b314-977e-4cd8-9bff-9220a6d1daed","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"28ddf991-63fb-4d14-b65d-9426e50c60e7","subtype":"Chart","type":"Plot"}},"id":"3c10ada6-e02d-486a-9c70-173b82ef4a47","type":"ResizeTool"}],"root_ids":["28ddf991-63fb-4d14-b65d-9426e50c60e7"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"8a4cc9ac-dd3f-4010-b27a-297dc73823e6","elementid":"8e8436f9-f57f-4f73-8dbb-b7f1ba320bce","modelid":"28ddf991-63fb-4d14-b65d-9426e50c60e7"}];
          
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