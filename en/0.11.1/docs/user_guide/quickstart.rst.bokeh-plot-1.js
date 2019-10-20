
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
  };var element = document.getElementById("632ef99d-5fec-4401-9a1a-9f6b8c45a200");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '632ef99d-5fec-4401-9a1a-9f6b8c45a200' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"bec17070-d93e-480a-9e41-b8e9a77c186c":{"roots":{"references":[{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"cb497ffb-2c8b-42f8-aa49-a9377944ea5d","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"b183ee8b-a829-45d2-b3ab-907d9253b648","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"1dc78b79-20de-4297-98bf-d17c7793710b","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"eb7039d1-dc0a-448e-8492-66fda6d22f4f","type":"BoxAnnotation"},"plot":{"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"}},"id":"c44d9e4f-0e93-4fe7-b6a3-1b1629cad1b4","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"d73dbd5a-23e5-4e74-ba11-b0627bc86d2f","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"eb7039d1-dc0a-448e-8492-66fda6d22f4f","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"6d2f9e3a-a6a1-4948-866a-dcffa97cdb37","type":"ColumnDataSource"},{"attributes":{},"id":"26a9e2a8-fef5-4faa-9d7b-f9d0a7ffc044","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"6d2f9e3a-a6a1-4948-866a-dcffa97cdb37","type":"ColumnDataSource"},"glyph":{"id":"990f5f83-f52f-464f-9ea8-7a8c773e83dc","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"884c9b13-71d7-45c0-ac6b-d26873b254bc","type":"Line"},"selection_glyph":null},"id":"caba136f-8c0c-415b-ade3-2a3218d50f53","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"21c07189-d9b1-4ff0-89dd-e15296a027e0","type":"ColumnDataSource"},"glyph":{"id":"1fc31af8-5c79-41d5-9111-92e2b6b2d696","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"3b494b49-ac5e-44f6-a689-c88413d09e10","type":"Line"},"selection_glyph":null},"id":"dac8f69a-669b-4cd1-aa34-797468aa19b6","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f242ce38-9086-49c6-b68c-4d03a14dda97","type":"LogTicker"}},"id":"e7bbaad9-e96d-4e70-9ffb-bf2a072e0130","type":"Grid"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"c9909b59-ba01-4fa5-afcf-c0d42b70cfb6","type":"Range1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"884c9b13-71d7-45c0-ac6b-d26873b254bc","type":"Line"},{"attributes":{"legends":[["y=x",[{"id":"d1e14447-cffc-4bd4-82d2-b53efb9b2516","type":"GlyphRenderer"},{"id":"937dc788-271c-40e3-9cf2-4f60395c2246","type":"GlyphRenderer"}]],["y=x^2",[{"id":"caba136f-8c0c-415b-ade3-2a3218d50f53","type":"GlyphRenderer"}]],["y=10^x",[{"id":"ad6fbaff-7add-4385-a88e-e0513878923b","type":"GlyphRenderer"},{"id":"4a84e557-6983-43cf-9c95-302a7544c9e4","type":"GlyphRenderer"}]],["y=10^x^2",[{"id":"dac8f69a-669b-4cd1-aa34-797468aa19b6","type":"GlyphRenderer"}]]],"plot":{"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"}},"id":"234932cc-21e5-4083-8d98-3eb7a14ffb76","type":"Legend"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee02f313-12a1-4b45-ba26-e919ec0fee56","type":"Circle"},{"attributes":{"plot":{"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"}},"id":"b5168495-f87a-43f4-8d6f-06e4499b099c","type":"PreviewSaveTool"},{"attributes":{"axis_label":"particles","formatter":{"id":"fb1463f4-a27a-4083-aa80-198f2955256b","type":"LogTickFormatter"},"plot":{"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"f242ce38-9086-49c6-b68c-4d03a14dda97","type":"LogTicker"}},"id":"07ac20c7-4c3f-4ed6-9ba4-72e61d23f982","type":"LogAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"f5a6687f-edd0-42a4-ad03-648a2102845e","type":"Circle"},{"attributes":{"num_minor_ticks":10},"id":"f242ce38-9086-49c6-b68c-4d03a14dda97","type":"LogTicker"},{"attributes":{"plot":{"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"}},"id":"95053a9b-1182-4f38-ade3-1843b4889e8b","type":"ResetTool"},{"attributes":{"data_source":{"id":"66acf5f0-19f4-4d87-9cdc-ca0d8f727da7","type":"ColumnDataSource"},"glyph":{"id":"c715821c-a066-49fd-9094-df093413e026","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"61decc02-97f2-47fe-904a-21be69caa9fd","type":"Line"},"selection_glyph":null},"id":"d1e14447-cffc-4bd4-82d2-b53efb9b2516","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"1dc78b79-20de-4297-98bf-d17c7793710b","type":"ColumnDataSource"},"glyph":{"id":"479f3d03-72e1-4b4c-8744-97fb0daadff9","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"f5a6687f-edd0-42a4-ad03-648a2102845e","type":"Circle"},"selection_glyph":null},"id":"4a84e557-6983-43cf-9c95-302a7544c9e4","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"}},"id":"3be17ace-cff3-4e61-9361-6798965eb1e1","type":"PanTool"},{"attributes":{"axis_label":"sections","formatter":{"id":"26a9e2a8-fef5-4faa-9d7b-f9d0a7ffc044","type":"BasicTickFormatter"},"plot":{"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0b28c1d-1d90-4c12-9552-182c81423a08","type":"BasicTicker"}},"id":"fbb1e786-7ce3-43f8-91b2-a68e1504694c","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c715821c-a066-49fd-9094-df093413e026","type":"Line"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"990f5f83-f52f-464f-9ea8-7a8c773e83dc","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"c3dece44-4dfd-4b29-a18c-f9f5065610ea","type":"ColumnDataSource"},{"attributes":{},"id":"89abc463-a596-4caa-a5e2-60f92ab2fcc1","type":"ToolEvents"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"61decc02-97f2-47fe-904a-21be69caa9fd","type":"Line"},{"attributes":{"callback":null},"id":"4415e091-4a74-499c-9dec-ec1a8967f158","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"479f3d03-72e1-4b4c-8744-97fb0daadff9","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"21c07189-d9b1-4ff0-89dd-e15296a027e0","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"48098a0d-5825-428b-b6bb-4e160862b814","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"3b494b49-ac5e-44f6-a689-c88413d09e10","type":"Line"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"66acf5f0-19f4-4d87-9cdc-ca0d8f727da7","type":"ColumnDataSource"},{"attributes":{"ticker":null},"id":"fb1463f4-a27a-4083-aa80-198f2955256b","type":"LogTickFormatter"},{"attributes":{"data_source":{"id":"d73dbd5a-23e5-4e74-ba11-b0627bc86d2f","type":"ColumnDataSource"},"glyph":{"id":"48098a0d-5825-428b-b6bb-4e160862b814","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ee02f313-12a1-4b45-ba26-e919ec0fee56","type":"Circle"},"selection_glyph":null},"id":"937dc788-271c-40e3-9cf2-4f60395c2246","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"1fc31af8-5c79-41d5-9111-92e2b6b2d696","type":"Line"},{"attributes":{},"id":"c0b28c1d-1d90-4c12-9552-182c81423a08","type":"BasicTicker"},{"attributes":{"below":[{"id":"fbb1e786-7ce3-43f8-91b2-a68e1504694c","type":"LinearAxis"}],"left":[{"id":"07ac20c7-4c3f-4ed6-9ba4-72e61d23f982","type":"LogAxis"}],"renderers":[{"id":"fbb1e786-7ce3-43f8-91b2-a68e1504694c","type":"LinearAxis"},{"id":"f44333dd-708d-4a36-8bed-c774f6873981","type":"Grid"},{"id":"07ac20c7-4c3f-4ed6-9ba4-72e61d23f982","type":"LogAxis"},{"id":"e7bbaad9-e96d-4e70-9ffb-bf2a072e0130","type":"Grid"},{"id":"eb7039d1-dc0a-448e-8492-66fda6d22f4f","type":"BoxAnnotation"},{"id":"234932cc-21e5-4083-8d98-3eb7a14ffb76","type":"Legend"},{"id":"d1e14447-cffc-4bd4-82d2-b53efb9b2516","type":"GlyphRenderer"},{"id":"937dc788-271c-40e3-9cf2-4f60395c2246","type":"GlyphRenderer"},{"id":"caba136f-8c0c-415b-ade3-2a3218d50f53","type":"GlyphRenderer"},{"id":"ad6fbaff-7add-4385-a88e-e0513878923b","type":"GlyphRenderer"},{"id":"4a84e557-6983-43cf-9c95-302a7544c9e4","type":"GlyphRenderer"},{"id":"dac8f69a-669b-4cd1-aa34-797468aa19b6","type":"GlyphRenderer"}],"title":"log axis example","tool_events":{"id":"89abc463-a596-4caa-a5e2-60f92ab2fcc1","type":"ToolEvents"},"tools":[{"id":"3be17ace-cff3-4e61-9361-6798965eb1e1","type":"PanTool"},{"id":"c44d9e4f-0e93-4fe7-b6a3-1b1629cad1b4","type":"BoxZoomTool"},{"id":"95053a9b-1182-4f38-ade3-1843b4889e8b","type":"ResetTool"},{"id":"b5168495-f87a-43f4-8d6f-06e4499b099c","type":"PreviewSaveTool"}],"x_range":{"id":"4415e091-4a74-499c-9dec-ec1a8967f158","type":"DataRange1d"},"y_mapper_type":"log","y_range":{"id":"c9909b59-ba01-4fa5-afcf-c0d42b70cfb6","type":"Range1d"}},"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"c3dece44-4dfd-4b29-a18c-f9f5065610ea","type":"ColumnDataSource"},"glyph":{"id":"cb497ffb-2c8b-42f8-aa49-a9377944ea5d","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"b183ee8b-a829-45d2-b3ab-907d9253b648","type":"Line"},"selection_glyph":null},"id":"ad6fbaff-7add-4385-a88e-e0513878923b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"a3f80e10-0787-4b73-b397-682112eba7b3","subtype":"Figure","type":"Plot"},"ticker":{"id":"c0b28c1d-1d90-4c12-9552-182c81423a08","type":"BasicTicker"}},"id":"f44333dd-708d-4a36-8bed-c774f6873981","type":"Grid"}],"root_ids":["a3f80e10-0787-4b73-b397-682112eba7b3"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"bec17070-d93e-480a-9e41-b8e9a77c186c","elementid":"632ef99d-5fec-4401-9a1a-9f6b8c45a200","modelid":"a3f80e10-0787-4b73-b397-682112eba7b3"}];
          
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