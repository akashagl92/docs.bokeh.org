
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
  };var element = document.getElementById("7b7b3453-7c5e-4da3-b04c-2cdcee00c4bb");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '7b7b3453-7c5e-4da3-b04c-2cdcee00c4bb' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"14e938a9-0b11-45d1-a5b9-4dc23bb7167d":{"roots":{"references":[{"attributes":{},"id":"a5c0ffb4-57cf-47c7-bf27-aebf471a84e3","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"}},"id":"cb1043e2-bd74-401b-b44d-95e428eaaa55","type":"HelpTool"},{"attributes":{"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"}},"id":"f44608f3-7722-4b14-b95b-5e0b732562db","type":"PanTool"},{"attributes":{"data_source":{"id":"9816335e-1954-4a62-a79a-99f6fb7cc5ae","type":"ColumnDataSource"},"glyph":{"id":"f66428fe-7e47-4a3e-8f86-4b34dd0c50f0","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"26054c52-cbac-4677-b941-f71c7456e232","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"},"ticker":{"id":"64e20ebf-d8a7-456a-a4bf-af48c7e79381","type":"BasicTicker"}},"id":"5613fdb5-98ee-4df8-bb35-d4f84af76eb5","type":"Grid"},{"attributes":{"callback":null,"end":4.4,"start":-0.4},"id":"c822a097-6d62-4dd3-93f3-f99500050157","type":"Range1d"},{"attributes":{"callback":null,"end":138.4,"start":-10.4},"id":"6159acca-0997-4f84-8ccd-df56923731a6","type":"Range1d"},{"attributes":{},"id":"fa98d01f-f932-4c3c-8b10-1e95fb266aa5","type":"BasicTicker"},{"attributes":{"data_source":{"id":"d01734b7-1b74-419b-8c84-a99b4f658477","type":"ColumnDataSource"},"glyph":{"id":"37dd19a4-ccbd-4eaa-a874-d94b59721024","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6ea42062-9c11-410a-b3dd-f2219cf4398b","type":"GlyphRenderer"},{"attributes":{"axis_label":"index","formatter":{"id":"a5c0ffb4-57cf-47c7-bf27-aebf471a84e3","type":"BasicTickFormatter"},"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"},"ticker":{"id":"64e20ebf-d8a7-456a-a4bf-af48c7e79381","type":"BasicTicker"}},"id":"dc75db0a-c030-4dcf-858f-eb56837685c4","type":"LinearAxis"},{"attributes":{"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"}},"id":"b6ce177f-3614-40ac-b201-252a972fb2d4","type":"PreviewSaveTool"},{"attributes":{"axis_label":"Languages","formatter":{"id":"11a9df74-50f1-426a-a7f6-9b406dec670b","type":"BasicTickFormatter"},"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"},"ticker":{"id":"fa98d01f-f932-4c3c-8b10-1e95fb266aa5","type":"BasicTicker"}},"id":"0c629d62-be45-49d3-b608-c704299d3819","type":"LinearAxis"},{"attributes":{},"id":"11a9df74-50f1-426a-a7f6-9b406dec670b","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"},{"series":"b"}],"series":["b","b","b","b","b"],"x_values":[0,1,2,3,4],"y_values":[12,33,47,15,126]}},"id":"c8466205-1110-4fe5-885d-7155a889d243","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"},{"series":"a"}],"series":["a","a","a","a","a"],"x_values":[0,1,2,3,4],"y_values":[2,3,7,5,26]}},"id":"d01734b7-1b74-419b-8c84-a99b4f658477","type":"ColumnDataSource"},{"attributes":{"legends":[["a",[{"id":"6ea42062-9c11-410a-b3dd-f2219cf4398b","type":"GlyphRenderer"}]],["b",[{"id":"4b7ae6bb-2a95-40a0-8406-11de8729bb53","type":"GlyphRenderer"}]],["c",[{"id":"26054c52-cbac-4677-b941-f71c7456e232","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"}},"id":"a6aecc76-27a0-4d92-b549-7ec02bd69a91","type":"Legend"},{"attributes":{"dimension":1,"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"},"ticker":{"id":"fa98d01f-f932-4c3c-8b10-1e95fb266aa5","type":"BasicTicker"}},"id":"56cb12cd-ce38-41c5-9c27-1fb50fbec226","type":"Grid"},{"attributes":{"data_source":{"id":"c8466205-1110-4fe5-885d-7155a889d243","type":"ColumnDataSource"},"glyph":{"id":"0cb71050-2122-469a-97fc-f90ea868be9f","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"4b7ae6bb-2a95-40a0-8406-11de8729bb53","type":"GlyphRenderer"},{"attributes":{},"id":"64e20ebf-d8a7-456a-a4bf-af48c7e79381","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#407ee7"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"f66428fe-7e47-4a3e-8f86-4b34dd0c50f0","type":"Line"},{"attributes":{"overlay":{"id":"f7138ab2-1294-41f9-96ea-352b6b6429ae","type":"BoxAnnotation"},"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"}},"id":"4f152973-7f07-44f0-af6d-c22af9802703","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y_values","x_values"],"data":{"chart_index":[{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"},{"series":"c"}],"series":["c","c","c","c","c"],"x_values":[0,1,2,3,4],"y_values":[22,43,10,25,26]}},"id":"9816335e-1954-4a62-a79a-99f6fb7cc5ae","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#f22c40"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"37dd19a4-ccbd-4eaa-a874-d94b59721024","type":"Line"},{"attributes":{"line_color":{"value":"#5ab738"},"line_width":{"value":2},"x":{"field":"x_values"},"y":{"field":"y_values"}},"id":"0cb71050-2122-469a-97fc-f90ea868be9f","type":"Line"},{"attributes":{"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"}},"id":"0e0b7a4d-6176-4998-b4bc-97a2d9553f4b","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f7138ab2-1294-41f9-96ea-352b6b6429ae","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"dc75db0a-c030-4dcf-858f-eb56837685c4","type":"LinearAxis"}],"left":[{"id":"0c629d62-be45-49d3-b608-c704299d3819","type":"LinearAxis"}],"legend":"top_left","plot_height":400,"plot_width":400,"renderers":[{"id":"f7138ab2-1294-41f9-96ea-352b6b6429ae","type":"BoxAnnotation"},{"id":"6ea42062-9c11-410a-b3dd-f2219cf4398b","type":"GlyphRenderer"},{"id":"4b7ae6bb-2a95-40a0-8406-11de8729bb53","type":"GlyphRenderer"},{"id":"26054c52-cbac-4677-b941-f71c7456e232","type":"GlyphRenderer"},{"id":"a6aecc76-27a0-4d92-b549-7ec02bd69a91","type":"Legend"},{"id":"dc75db0a-c030-4dcf-858f-eb56837685c4","type":"LinearAxis"},{"id":"0c629d62-be45-49d3-b608-c704299d3819","type":"LinearAxis"},{"id":"5613fdb5-98ee-4df8-bb35-d4f84af76eb5","type":"Grid"},{"id":"56cb12cd-ce38-41c5-9c27-1fb50fbec226","type":"Grid"}],"title":"line","title_text_font_size":{"value":"14pt"},"tool_events":{"id":"9aa3e233-c4f0-4564-b1ce-c0fa65dfa5a9","type":"ToolEvents"},"tools":[{"id":"f44608f3-7722-4b14-b95b-5e0b732562db","type":"PanTool"},{"id":"b0a06afb-c808-4391-92be-3340d20828ec","type":"WheelZoomTool"},{"id":"4f152973-7f07-44f0-af6d-c22af9802703","type":"BoxZoomTool"},{"id":"b6ce177f-3614-40ac-b201-252a972fb2d4","type":"PreviewSaveTool"},{"id":"6b04949f-d6db-4f33-89e5-31b545e37eb5","type":"ResizeTool"},{"id":"0e0b7a4d-6176-4998-b4bc-97a2d9553f4b","type":"ResetTool"},{"id":"cb1043e2-bd74-401b-b44d-95e428eaaa55","type":"HelpTool"}],"x_mapper_type":"auto","x_range":{"id":"c822a097-6d62-4dd3-93f3-f99500050157","type":"Range1d"},"xscale":"auto","y_mapper_type":"auto","y_range":{"id":"6159acca-0997-4f84-8ccd-df56923731a6","type":"Range1d"},"yscale":"auto"},"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"9aa3e233-c4f0-4564-b1ce-c0fa65dfa5a9","type":"ToolEvents"},{"attributes":{"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"}},"id":"b0a06afb-c808-4391-92be-3340d20828ec","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"623a72fc-7ac3-4013-8194-a4011a02628c","subtype":"Chart","type":"Plot"}},"id":"6b04949f-d6db-4f33-89e5-31b545e37eb5","type":"ResizeTool"}],"root_ids":["623a72fc-7ac3-4013-8194-a4011a02628c"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"14e938a9-0b11-45d1-a5b9-4dc23bb7167d","elementid":"7b7b3453-7c5e-4da3-b04c-2cdcee00c4bb","modelid":"623a72fc-7ac3-4013-8194-a4011a02628c"}];
          
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