
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
  };var element = document.getElementById("c03e6092-f829-4de9-b101-78bbb8bfc99a");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c03e6092-f829-4de9-b101-78bbb8bfc99a' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"ae532222-0ed0-4faa-b801-28f7c78624b8":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"jython"}],"series":["jython"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,22.0,43.0,10.0,25.0,26.0,101.0,114.0,203.0,194.0,215.0,201.0,227.0,139.0,160.0,0.0]]}},"id":"65f23cce-4cf0-418f-ba4f-e44f317d8904","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"}},"id":"7825e801-d12d-4ce2-b1e4-207d9c1c586c","type":"PanTool"},{"attributes":{"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"}},"id":"ff998cbe-9475-4ee9-b47a-f19057c72e62","type":"ResizeTool"},{"attributes":{},"id":"1df99f02-d74b-4b05-94c5-488d90313313","type":"BasicTicker"},{"attributes":{"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"}},"id":"9dbb73cd-ebd6-466e-a2f9-c050bb46425b","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"}},"id":"9dd01137-8159-4ab9-8ea2-f150d37695b0","type":"PreviewSaveTool"},{"attributes":{},"id":"f1ece53a-7a45-4294-a9f4-0d7ee5f32cb8","type":"BasicTickFormatter"},{"attributes":{"axis_label":"time","formatter":{"id":"f1ece53a-7a45-4294-a9f4-0d7ee5f32cb8","type":"BasicTickFormatter"},"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"},"ticker":{"id":"91fb5556-d96e-4fd8-b5e2-d6b98e743ccc","type":"BasicTicker"}},"id":"69acff57-2d11-4b09-9a8a-f18a632aca4b","type":"LinearAxis"},{"attributes":{"data_source":{"id":"65f23cce-4cf0-418f-ba4f-e44f317d8904","type":"ColumnDataSource"},"glyph":{"id":"b3f9b718-a9ff-4fad-aea8-b2d58bf59991","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a0dfba9c-f394-4af5-a126-311455dbda32","type":"GlyphRenderer"},{"attributes":{"axis_label":"memory","formatter":{"id":"7f226ac2-c4cf-4beb-aa82-c68efd65ec15","type":"BasicTickFormatter"},"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"},"ticker":{"id":"1df99f02-d74b-4b05-94c5-488d90313313","type":"BasicTicker"}},"id":"b2aa7fb3-320a-4390-aa1d-5dde4b483bdc","type":"LinearAxis"},{"attributes":{},"id":"f3760a8b-b5c1-4ba4-80ca-7c3f3892ca8d","type":"ToolEvents"},{"attributes":{"below":[{"id":"69acff57-2d11-4b09-9a8a-f18a632aca4b","type":"LinearAxis"}],"left":[{"id":"b2aa7fb3-320a-4390-aa1d-5dde4b483bdc","type":"LinearAxis"}],"legend":"top_left","plot_height":400,"plot_width":400,"renderers":[{"id":"acf10805-469f-4a27-8016-e5eb6aeefd0b","type":"BoxAnnotation"},{"id":"a0dfba9c-f394-4af5-a126-311455dbda32","type":"GlyphRenderer"},{"id":"9b23c84d-3a81-44b3-8ae9-141d13fe1415","type":"GlyphRenderer"},{"id":"fb88c704-fbb2-4eda-9f70-355ab9c18449","type":"GlyphRenderer"},{"id":"07b2ca6e-f2c7-4a5e-ad4b-d1e0fd172f12","type":"Legend"},{"id":"69acff57-2d11-4b09-9a8a-f18a632aca4b","type":"LinearAxis"},{"id":"b2aa7fb3-320a-4390-aa1d-5dde4b483bdc","type":"LinearAxis"},{"id":"6c449d66-87c1-443e-8ec5-90ea4f15186f","type":"Grid"},{"id":"280aa144-afa7-4482-8e9e-d66b254c224b","type":"Grid"}],"title":"Area Chart","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"f3760a8b-b5c1-4ba4-80ca-7c3f3892ca8d","type":"ToolEvents"},"tools":[{"id":"7825e801-d12d-4ce2-b1e4-207d9c1c586c","type":"PanTool"},{"id":"9dbb73cd-ebd6-466e-a2f9-c050bb46425b","type":"WheelZoomTool"},{"id":"7e2303ba-4bfc-4b40-9f92-6bbee849e3de","type":"BoxZoomTool"},{"id":"9dd01137-8159-4ab9-8ea2-f150d37695b0","type":"PreviewSaveTool"},{"id":"ff998cbe-9475-4ee9-b47a-f19057c72e62","type":"ResizeTool"},{"id":"11cf9b69-1bbf-4c97-95aa-62917b7c0d22","type":"ResetTool"},{"id":"40789781-9a8a-4d82-a2a9-69509c0ddf15","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"5ced46bc-bf7e-4399-a0bb-987c948a93bb","type":"Range1d"},"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"cc0a8114-758e-4026-a7ec-5efc7a44becc","type":"Range1d"},"yscale":"auto"},"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"},"ticker":{"id":"1df99f02-d74b-4b05-94c5-488d90313313","type":"BasicTicker"}},"id":"280aa144-afa7-4482-8e9e-d66b254c224b","type":"Grid"},{"attributes":{"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"},"ticker":{"id":"91fb5556-d96e-4fd8-b5e2-d6b98e743ccc","type":"BasicTicker"}},"id":"6c449d66-87c1-443e-8ec5-90ea4f15186f","type":"Grid"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"pypy"}],"series":["pypy"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,12.0,33.0,47.0,15.0,126.0,121.0,144.0,233.0,254.0,225.0,226.0,267.0,110.0,130.0,0.0]]}},"id":"08ede214-9dd5-439a-994e-68a6e94c612c","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"8c1f8e1e-dfc2-4591-b709-cf3bbce9fefd","type":"Patches"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"python"}],"series":["python"],"x_values":[[0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,13]],"y_values":[[0.0,2.0,3.0,7.0,5.0,26.0,221.0,44.0,233.0,254.0,265.0,266.0,267.0,120.0,111.0,0.0]]}},"id":"c171eeac-db73-4584-acab-d925b184696b","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"acf10805-469f-4a27-8016-e5eb6aeefd0b","type":"BoxAnnotation"},"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"}},"id":"7e2303ba-4bfc-4b40-9f92-6bbee849e3de","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"08ede214-9dd5-439a-994e-68a6e94c612c","type":"ColumnDataSource"},"glyph":{"id":"42ec1388-20fa-463b-bd99-81272c21184b","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9b23c84d-3a81-44b3-8ae9-141d13fe1415","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"c171eeac-db73-4584-acab-d925b184696b","type":"ColumnDataSource"},"glyph":{"id":"8c1f8e1e-dfc2-4591-b709-cf3bbce9fefd","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fb88c704-fbb2-4eda-9f70-355ab9c18449","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":293.7,"start":-26.700000000000003},"id":"cc0a8114-758e-4026-a7ec-5efc7a44becc","type":"Range1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"acf10805-469f-4a27-8016-e5eb6aeefd0b","type":"BoxAnnotation"},{"attributes":{},"id":"7f226ac2-c4cf-4beb-aa82-c68efd65ec15","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"42ec1388-20fa-463b-bd99-81272c21184b","type":"Patches"},{"attributes":{"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"}},"id":"11cf9b69-1bbf-4c97-95aa-62917b7c0d22","type":"ResetTool"},{"attributes":{"plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"}},"id":"40789781-9a8a-4d82-a2a9-69509c0ddf15","type":"HelpTool"},{"attributes":{},"id":"91fb5556-d96e-4fd8-b5e2-d6b98e743ccc","type":"BasicTicker"},{"attributes":{"callback":null,"end":14.3,"start":-1.3},"id":"5ced46bc-bf7e-4399-a0bb-987c948a93bb","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.8},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"xs":{"field":"x_values"},"ys":{"field":"y_values"}},"id":"b3f9b718-a9ff-4fad-aea8-b2d58bf59991","type":"Patches"},{"attributes":{"legends":[["jython",[{"id":"a0dfba9c-f394-4af5-a126-311455dbda32","type":"GlyphRenderer"}]],["pypy",[{"id":"9b23c84d-3a81-44b3-8ae9-141d13fe1415","type":"GlyphRenderer"}]],["python",[{"id":"fb88c704-fbb2-4eda-9f70-355ab9c18449","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"988492cb-b5d9-4856-b150-453117e31d11","subtype":"Chart","type":"Plot"}},"id":"07b2ca6e-f2c7-4a5e-ad4b-d1e0fd172f12","type":"Legend"}],"root_ids":["988492cb-b5d9-4856-b150-453117e31d11"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"ae532222-0ed0-4faa-b801-28f7c78624b8","elementid":"c03e6092-f829-4de9-b101-78bbb8bfc99a","modelid":"988492cb-b5d9-4856-b150-453117e31d11"}];
          
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