
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
  };var element = document.getElementById("49d1749b-b16d-4e7f-ac79-f89566f54a48");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '49d1749b-b16d-4e7f-ac79-f89566f54a48' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"0a9129ad-dd4e-42bc-815e-b3373571f027":{"roots":{"references":[{"attributes":{},"id":"b0c4cff6-4a9f-48c3-bb58-352976a84146","type":"CategoricalTickFormatter"},{"attributes":{},"id":"36b3386e-8248-4162-947b-d21f28cb29ab","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2cd00902-787e-4f15-94bc-b0edaa7107eb","type":"Rect"},{"attributes":{"data_source":{"id":"378dd19f-4983-47de-a6f2-c8bb57742a95","type":"ColumnDataSource"},"glyph":{"id":"47687168-2d5e-4d1d-8830-e144130ff28b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b73e9e4e-f5ac-47de-930f-5bf3bf10b7a3","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":6118.875},"id":"2821dffd-503e-47a7-8d29-2fb46d21909a","type":"Range1d"},{"attributes":{"data_source":{"id":"9ae515be-3a93-4eb7-8763-9c423f0e52eb","type":"ColumnDataSource"},"glyph":{"id":"48eaf954-29a3-4f07-ae91-97d54b584e3b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"acc7799a-ba87-4f5e-9010-647597ce8bd5","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"},"ticker":{"id":"7cb94ef1-c637-4da6-8076-8da93ca7fd27","type":"BasicTicker"}},"id":"9b448ba4-b684-4399-ac9c-50297db3e626","type":"Grid"},{"attributes":{"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"}},"id":"5390c26c-e357-486f-96c7-d70b414d6559","type":"PreviewSaveTool"},{"attributes":{},"id":"7cb94ef1-c637-4da6-8076-8da93ca7fd27","type":"BasicTicker"},{"attributes":{},"id":"3d3b43d6-264c-417c-a41f-72a9a1d91c7b","type":"ToolEvents"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48eaf954-29a3-4f07-ae91-97d54b584e3b","type":"Rect"},{"attributes":{"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"}},"id":"e5b37e49-7a9a-4e5a-8ebc-38e289f9322b","type":"WheelZoomTool"},{"attributes":{},"id":"7ecaf596-18b6-4745-a555-8d7efe90bf96","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"cbfc6644-5cef-48d2-a7a5-31d480318a76","type":"BoxAnnotation"},"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"}},"id":"7286d765-368b-47ea-ab98-6d8b386c4d47","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"97c10c2e-34b3-4603-9ef1-13af22bb4c8d","type":"ColumnDataSource"},"glyph":{"id":"2cd00902-787e-4f15-94bc-b0edaa7107eb","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e3542276-8979-4b99-9c5c-d0cb433f5475","type":"GlyphRenderer"},{"attributes":{"axis_label":"Sum( Mpg )","formatter":{"id":"36b3386e-8248-4162-947b-d21f28cb29ab","type":"BasicTickFormatter"},"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"},"ticker":{"id":"7cb94ef1-c637-4da6-8076-8da93ca7fd27","type":"BasicTicker"}},"id":"3d3d174c-0c25-4253-94af-bfd8d162ef32","type":"LinearAxis"},{"attributes":{"below":[{"id":"edc68d73-9da2-4795-ac67-db23b040aa99","type":"CategoricalAxis"}],"left":[{"id":"3d3d174c-0c25-4253-94af-bfd8d162ef32","type":"LinearAxis"}],"legend":null,"plot_height":400,"plot_width":400,"renderers":[{"id":"cbfc6644-5cef-48d2-a7a5-31d480318a76","type":"BoxAnnotation"},{"id":"acc7799a-ba87-4f5e-9010-647597ce8bd5","type":"GlyphRenderer"},{"id":"e3542276-8979-4b99-9c5c-d0cb433f5475","type":"GlyphRenderer"},{"id":"a7114fdf-6fee-4b37-b6c7-c0aae1b90df8","type":"GlyphRenderer"},{"id":"b73e9e4e-f5ac-47de-930f-5bf3bf10b7a3","type":"GlyphRenderer"},{"id":"a8f198e2-1a7b-4a38-bef5-5ada7e0545f9","type":"GlyphRenderer"},{"id":"edc68d73-9da2-4795-ac67-db23b040aa99","type":"CategoricalAxis"},{"id":"3d3d174c-0c25-4253-94af-bfd8d162ef32","type":"LinearAxis"},{"id":"9b448ba4-b684-4399-ac9c-50297db3e626","type":"Grid"}],"title":"Total MPG by CYL","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"3d3b43d6-264c-417c-a41f-72a9a1d91c7b","type":"ToolEvents"},"tools":[{"id":"9503b458-71e4-46d4-83ed-c1961db7928b","type":"PanTool"},{"id":"e5b37e49-7a9a-4e5a-8ebc-38e289f9322b","type":"WheelZoomTool"},{"id":"7286d765-368b-47ea-ab98-6d8b386c4d47","type":"BoxZoomTool"},{"id":"5390c26c-e357-486f-96c7-d70b414d6559","type":"PreviewSaveTool"},{"id":"5a7c32ba-defc-4587-9f5e-40697cb3a13c","type":"ResizeTool"},{"id":"920d88c1-529d-41d2-836f-04d3c97e9223","type":"ResetTool"},{"id":"d5c5c20c-218c-4d89-88b8-6f31902a754f","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"5408a81f-8e66-4f21-bcb3-50dafe78ab99","type":"FactorRange"},"xgrid":false,"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"2821dffd-503e-47a7-8d29-2fb46d21909a","type":"Range1d"},"yscale":"auto"},"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":6}],"color":["#f22c40"],"cyl":[6],"fill_alpha":[0.8],"height":[1657.8],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["6"],"y":[828.9]}},"id":"378dd19f-4983-47de-a6f2-c8bb57742a95","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5fd99fb3-d9e6-4663-8afe-a075ed90ae96","type":"Rect"},{"attributes":{"callback":null,"factors":["3","4","5","6","8"]},"id":"5408a81f-8e66-4f21-bcb3-50dafe78ab99","type":"FactorRange"},{"attributes":{"data_source":{"id":"c743f2da-6ae0-4b5d-8ce6-b3da8ac6b99f","type":"ColumnDataSource"},"glyph":{"id":"5fd99fb3-d9e6-4663-8afe-a075ed90ae96","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a8f198e2-1a7b-4a38-bef5-5ada7e0545f9","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":4}],"color":["#f22c40"],"cyl":[4],"fill_alpha":[0.8],"height":[5827.5],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["4"],"y":[2913.75]}},"id":"97c10c2e-34b3-4603-9ef1-13af22bb4c8d","type":"ColumnDataSource"},{"attributes":{"axis_label":"Cyl","formatter":{"id":"b0c4cff6-4a9f-48c3-bb58-352976a84146","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"},"ticker":{"id":"7ecaf596-18b6-4745-a555-8d7efe90bf96","type":"CategoricalTicker"}},"id":"edc68d73-9da2-4795-ac67-db23b040aa99","type":"CategoricalAxis"},{"attributes":{"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"}},"id":"920d88c1-529d-41d2-836f-04d3c97e9223","type":"ResetTool"},{"attributes":{"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"}},"id":"5a7c32ba-defc-4587-9f5e-40697cb3a13c","type":"ResizeTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"47687168-2d5e-4d1d-8830-e144130ff28b","type":"Rect"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cbfc6644-5cef-48d2-a7a5-31d480318a76","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":8}],"color":["#f22c40"],"cyl":[8],"fill_alpha":[0.8],"height":[1541.1999999999998],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["8"],"y":[770.5999999999999]}},"id":"c743f2da-6ae0-4b5d-8ce6-b3da8ac6b99f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"}},"id":"9503b458-71e4-46d4-83ed-c1961db7928b","type":"PanTool"},{"attributes":{"plot":{"id":"a99b354e-9bba-461b-a59d-7ae75eebdf2e","subtype":"Chart","type":"Plot"}},"id":"d5c5c20c-218c-4d89-88b8-6f31902a754f","type":"HelpTool"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"color"},"height":{"field":"height","units":"data"},"line_color":{"field":"line_color"},"width":{"field":"width","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ef77d0b-c987-4c08-a3ca-54c05f394903","type":"Rect"},{"attributes":{"data_source":{"id":"6a4cbe2e-e7ae-4474-b0ab-6d4848917b87","type":"ColumnDataSource"},"glyph":{"id":"3ef77d0b-c987-4c08-a3ca-54c05f394903","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a7114fdf-6fee-4b37-b6c7-c0aae1b90df8","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":5}],"color":["#f22c40"],"cyl":[5],"fill_alpha":[0.8],"height":[82.1],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["5"],"y":[41.05]}},"id":"6a4cbe2e-e7ae-4474-b0ab-6d4848917b87","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["height","x","width","color","fill_alpha","y","line_alpha","line_color"],"data":{"chart_index":[{"cyl":3}],"color":["#f22c40"],"cyl":[3],"fill_alpha":[0.8],"height":[82.2],"line_alpha":[1.0],"line_color":["white"],"width":[0.8],"x":["3"],"y":[41.1]}},"id":"9ae515be-3a93-4eb7-8763-9c423f0e52eb","type":"ColumnDataSource"}],"root_ids":["a99b354e-9bba-461b-a59d-7ae75eebdf2e"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"0a9129ad-dd4e-42bc-815e-b3373571f027","elementid":"49d1749b-b16d-4e7f-ac79-f89566f54a48","modelid":"a99b354e-9bba-461b-a59d-7ae75eebdf2e"}];
          
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