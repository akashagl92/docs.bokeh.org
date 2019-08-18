
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
  };var element = document.getElementById("b931080c-9671-4a56-a360-4762fcdae7c2");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'b931080c-9671-4a56-a360-4762fcdae7c2' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"f73d255d-6edc-4efc-bd33-a43f159646b4":{"roots":{"references":[{"attributes":{"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"}},"id":"97718335-f7e8-4336-b4ff-8c79633f8062","type":"ResizeTool"},{"attributes":{"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"},"ticker":{"id":"a7a6b88b-7b8c-445d-8f2f-2e1760eb3334","type":"BasicTicker"}},"id":"28fe3429-1d52-4100-b90d-b8b486bf6c90","type":"Grid"},{"attributes":{"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"}},"id":"bfdb9638-6306-47bc-8a39-13384b84cdcc","type":"PreviewSaveTool"},{"attributes":{},"id":"6e5e1c85-7e13-4926-852e-03865a97e541","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"}},"id":"ab364443-5d96-4cbb-a320-2bf73116398f","type":"HelpTool"},{"attributes":{"axis_label":"petal_length","formatter":{"id":"6e5e1c85-7e13-4926-852e-03865a97e541","type":"BasicTickFormatter"},"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"},"ticker":{"id":"a7a6b88b-7b8c-445d-8f2f-2e1760eb3334","type":"BasicTicker"}},"id":"18fa7138-597b-444b-9068-0a2498b61761","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"},{"species":"versicolor"}],"species":["versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor"],"x_values":[4.7,4.5,4.9,4.0,4.6,4.5,4.7,3.3,4.6,3.9,3.5,4.2,4.0,4.7,3.6,4.4,4.5,4.1,4.5,3.9,4.8,4.0,4.9,4.7,4.3,4.4,4.8,5.0,4.5,3.5,3.8,3.7,3.9,5.1,4.5,4.5,4.7,4.4,4.1,4.0,4.4,4.6,4.0,3.3,4.2,4.2,4.2,4.3,3.0,4.1],"y_values":[1.4,1.5,1.5,1.3,1.5,1.3,1.6,1.0,1.3,1.4,1.0,1.5,1.0,1.4,1.3,1.4,1.5,1.0,1.5,1.1,1.8,1.3,1.5,1.2,1.3,1.4,1.4,1.7,1.5,1.0,1.1,1.0,1.2,1.6,1.5,1.6,1.5,1.3,1.3,1.3,1.2,1.4,1.2,1.0,1.3,1.2,1.3,1.3,1.1,1.3]}},"id":"770b9029-1ffe-4392-888a-3a3557d4d169","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":7.49,"start":0.4099999999999999},"id":"82b2317d-b76c-4ba7-bbfb-cf6baf9a29cf","type":"Range1d"},{"attributes":{"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"}},"id":"1787d0aa-a019-4eab-b13d-524081e5906b","type":"ResetTool"},{"attributes":{},"id":"a8c6cc6e-22b5-42a4-8fdf-166bf5fd2d8b","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#5ab738"},"line_color":{"value":"#5ab738"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"aff4da5c-acfc-49de-a894-9fb51af2e5d1","type":"Square"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"},{"species":"setosa"}],"species":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa"],"x_values":[1.4,1.4,1.3,1.5,1.4,1.7,1.4,1.5,1.4,1.5,1.5,1.6,1.4,1.1,1.2,1.5,1.3,1.4,1.7,1.5,1.7,1.5,1.0,1.7,1.9,1.6,1.6,1.5,1.4,1.6,1.6,1.5,1.5,1.4,1.5,1.2,1.3,1.4,1.3,1.5,1.3,1.3,1.3,1.6,1.9,1.4,1.6,1.4,1.5,1.4],"y_values":[0.2,0.2,0.2,0.2,0.2,0.4,0.3,0.2,0.2,0.1,0.2,0.2,0.1,0.1,0.2,0.4,0.4,0.3,0.3,0.3,0.2,0.4,0.2,0.5,0.2,0.2,0.4,0.2,0.2,0.2,0.2,0.4,0.1,0.2,0.2,0.2,0.2,0.1,0.2,0.2,0.3,0.3,0.2,0.6,0.4,0.3,0.2,0.2,0.2,0.2]}},"id":"27b7f3cc-f1db-4695-bdb6-d62d9a01be57","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a8379fc2-0457-41b7-b0a1-264f7f522ab4","type":"ColumnDataSource"},"glyph":{"id":"c5dc48e1-1be2-4612-a468-e814d6529957","type":"Triangle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4cc88adf-2861-43f5-bb28-0fd1858bd451","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#f22c40"},"line_color":{"value":"#f22c40"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"ca6c96f4-932e-4dce-8159-44e55ae686ea","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d61857b6-7321-46cb-bc52-c077ac48b132","type":"BoxAnnotation"},{"attributes":{},"id":"a7a6b88b-7b8c-445d-8f2f-2e1760eb3334","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"},{"species":"virginica"}],"species":["virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"],"x_values":[6.0,5.1,5.9,5.6,5.8,6.6,4.5,6.3,5.8,6.1,5.1,5.3,5.5,5.0,5.1,5.3,5.5,6.7,6.9,5.0,5.7,4.9,6.7,4.9,5.7,6.0,4.8,4.9,5.6,5.8,6.1,6.4,5.6,5.1,5.6,6.1,5.6,5.5,4.8,5.4,5.6,5.1,5.1,5.9,5.7,5.2,5.0,5.2,5.4,5.1],"y_values":[2.5,1.9,2.1,1.8,2.2,2.1,1.7,1.8,1.8,2.5,2.0,1.9,2.1,2.0,2.4,2.3,1.8,2.2,2.3,1.5,2.3,2.0,2.0,1.8,2.1,1.8,1.8,1.8,2.1,1.6,1.9,2.0,2.2,1.5,1.4,2.3,2.4,1.8,1.8,2.1,2.4,2.3,1.9,2.3,2.5,2.3,1.9,2.0,2.3,1.8]}},"id":"a8379fc2-0457-41b7-b0a1-264f7f522ab4","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.7},"fill_color":{"value":"#407ee7"},"line_color":{"value":"#407ee7"},"size":{"units":"screen","value":8},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"c5dc48e1-1be2-4612-a468-e814d6529957","type":"Triangle"},{"attributes":{"data_source":{"id":"27b7f3cc-f1db-4695-bdb6-d62d9a01be57","type":"ColumnDataSource"},"glyph":{"id":"ca6c96f4-932e-4dce-8159-44e55ae686ea","type":"Circle"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"f8a872d3-a968-4351-8172-7c49f4979425","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"}},"id":"a599efa4-9232-4ddf-a3b3-0eff3948833f","type":"WheelZoomTool"},{"attributes":{"axis_label":"petal_width","formatter":{"id":"a8c6cc6e-22b5-42a4-8fdf-166bf5fd2d8b","type":"BasicTickFormatter"},"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"},"ticker":{"id":"75a57bd7-b9dd-4694-9818-80809b6086aa","type":"BasicTicker"}},"id":"91e8d39e-15e9-45f3-b2fe-568b706367ba","type":"LinearAxis"},{"attributes":{"callback":null,"end":2.74,"start":-0.13999999999999999},"id":"7794b3d5-d281-492d-8bcd-f512414b00ba","type":"Range1d"},{"attributes":{"legends":[["setosa",[{"id":"f8a872d3-a968-4351-8172-7c49f4979425","type":"GlyphRenderer"}]],["versicolor",[{"id":"d7fefac0-deb8-4080-880a-6e3babf94079","type":"GlyphRenderer"}]],["virginica",[{"id":"4cc88adf-2861-43f5-bb28-0fd1858bd451","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"}},"id":"973621a5-d863-474c-afa4-a6bfd1d85544","type":"Legend"},{"attributes":{},"id":"8f652290-e3d9-47c0-80dd-c741e51595ed","type":"ToolEvents"},{"attributes":{"overlay":{"id":"d61857b6-7321-46cb-bc52-c077ac48b132","type":"BoxAnnotation"},"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"}},"id":"847ee76a-1121-4a6c-8d2a-a4c1e89a5a17","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"18fa7138-597b-444b-9068-0a2498b61761","type":"LinearAxis"}],"left":[{"id":"91e8d39e-15e9-45f3-b2fe-568b706367ba","type":"LinearAxis"}],"legend":true,"plot_height":400,"plot_width":400,"renderers":[{"id":"d61857b6-7321-46cb-bc52-c077ac48b132","type":"BoxAnnotation"},{"id":"f8a872d3-a968-4351-8172-7c49f4979425","type":"GlyphRenderer"},{"id":"d7fefac0-deb8-4080-880a-6e3babf94079","type":"GlyphRenderer"},{"id":"4cc88adf-2861-43f5-bb28-0fd1858bd451","type":"GlyphRenderer"},{"id":"973621a5-d863-474c-afa4-a6bfd1d85544","type":"Legend"},{"id":"18fa7138-597b-444b-9068-0a2498b61761","type":"LinearAxis"},{"id":"91e8d39e-15e9-45f3-b2fe-568b706367ba","type":"LinearAxis"},{"id":"28fe3429-1d52-4100-b90d-b8b486bf6c90","type":"Grid"},{"id":"8f494abe-f57f-4927-a20e-e7c7159e8dc6","type":"Grid"}],"title":"Iris Dataset Color and Marker by Species","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"8f652290-e3d9-47c0-80dd-c741e51595ed","type":"ToolEvents"},"tools":[{"id":"93c77f4e-b27c-46df-87e3-717bff5a63d5","type":"PanTool"},{"id":"a599efa4-9232-4ddf-a3b3-0eff3948833f","type":"WheelZoomTool"},{"id":"847ee76a-1121-4a6c-8d2a-a4c1e89a5a17","type":"BoxZoomTool"},{"id":"bfdb9638-6306-47bc-8a39-13384b84cdcc","type":"PreviewSaveTool"},{"id":"97718335-f7e8-4336-b4ff-8c79633f8062","type":"ResizeTool"},{"id":"1787d0aa-a019-4eab-b13d-524081e5906b","type":"ResetTool"},{"id":"ab364443-5d96-4cbb-a320-2bf73116398f","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"82b2317d-b76c-4ba7-bbfb-cf6baf9a29cf","type":"Range1d"},"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"7794b3d5-d281-492d-8bcd-f512414b00ba","type":"Range1d"},"yscale":"auto"},"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"75a57bd7-b9dd-4694-9818-80809b6086aa","type":"BasicTicker"},{"attributes":{"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"}},"id":"93c77f4e-b27c-46df-87e3-717bff5a63d5","type":"PanTool"},{"attributes":{"data_source":{"id":"770b9029-1ffe-4392-888a-3a3557d4d169","type":"ColumnDataSource"},"glyph":{"id":"aff4da5c-acfc-49de-a894-9fb51af2e5d1","type":"Square"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"d7fefac0-deb8-4080-880a-6e3babf94079","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"29a065c6-8bdd-4138-a248-4450b73ce3e7","subtype":"Chart","type":"Plot"},"ticker":{"id":"75a57bd7-b9dd-4694-9818-80809b6086aa","type":"BasicTicker"}},"id":"8f494abe-f57f-4927-a20e-e7c7159e8dc6","type":"Grid"}],"root_ids":["29a065c6-8bdd-4138-a248-4450b73ce3e7"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"f73d255d-6edc-4efc-bd33-a43f159646b4","elementid":"b931080c-9671-4a56-a360-4762fcdae7c2","modelid":"29a065c6-8bdd-4138-a248-4450b73ce3e7"}];
          
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