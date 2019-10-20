
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
  };var element = document.getElementById("888a6d40-c664-490c-ab60-201e633a1bfe");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '888a6d40-c664-490c-ab60-201e633a1bfe' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"065c9cb4-f933-4066-8bcd-a66d1edc49ed":{"roots":{"references":[{"attributes":{"callback":null},"id":"538c17ad-7e56-4397-b402-976c125bd27c","type":"DataRange1d"},{"attributes":{"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"},"ticker":{"id":"149a3678-7cd3-4221-bc25-7792909290ce","type":"BasicTicker"}},"id":"f7c2c2ea-9f78-41a9-9862-c3837ab69bc2","type":"Grid"},{"attributes":{},"id":"3771dbad-429c-4543-aec5-6cd243ceef6b","type":"BasicTicker"},{"attributes":{"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"}},"id":"77522bbe-8999-4754-a864-b42ef8d2b500","type":"PreviewSaveTool"},{"attributes":{"callback":null,"column_names":["Series 0","Series 1"],"data":{"Series 0":[0.0,1.0,1.0,2.0,2.0,3.0,3.0,4.0,4.0,5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0,9.0,9.0,10.0,10.0,11.0,11.0,12.0,12.0,13.0,13.0,14.0,14.0,15.0,15.0,16.0,16.0,17.0,17.0,18.0,18.0,19.0,19.0,20.0,20.0,21.0,21.0,22.0,22.0,23.0,23.0,24.0,24.0,25.0,25.0,26.0,26.0,27.0,27.0,28.0,28.0,29.0,29.0,30.0,30.0,31.0,31.0,32.0,32.0,33.0,33.0,34.0,34.0,35.0,35.0,36.0,36.0,37.0,37.0,38.0,38.0,39.0,39.0,40.0,40.0,41.0,41.0,42.0,42.0,43.0,43.0,44.0,44.0,45.0,45.0,46.0,46.0,47.0,47.0,48.0,48.0,49.0,49.0,50.0,50.0,51.0,51.0,52.0,52.0,53.0,53.0,54.0,54.0,55.0,55.0,56.0,56.0,57.0,57.0,58.0,58.0,59.0,59.0,60.0,60.0,61.0,61.0,62.0,62.0,63.0,63.0,64.0,64.0,65.0,65.0,66.0,66.0,67.0,67.0,68.0,68.0,69.0,69.0,70.0,70.0,71.0,71.0,72.0,72.0,73.0,73.0,74.0,74.0,75.0,75.0,76.0,76.0,77.0,77.0,78.0,78.0,79.0,79.0,80.0,80.0,81.0,81.0,82.0,82.0,83.0,83.0,84.0,84.0,85.0,85.0,86.0,86.0,87.0,87.0,88.0,88.0,89.0,89.0,90.0,90.0,91.0,91.0,92.0,92.0,93.0,93.0,94.0,94.0,95.0,95.0,96.0,96.0,97.0,97.0,98.0,98.0,99.0],"Series 1":[-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0,-6.0,-6.0,-5.0,-5.0,-4.0,-4.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0,-6.0,-6.0,-7.0,-7.0,-6.0,-6.0,-5.0,-5.0,-6.0,-6.0,-7.0,-7.0,-8.0,-8.0,-7.0,-7.0,-6.0,-6.0,-5.0,-5.0,-6.0,-6.0,-5.0,-5.0,-4.0,-4.0,-5.0,-5.0,-6.0,-6.0,-7.0,-7.0,-6.0,-6.0,-5.0,-5.0,-6.0,-6.0,-7.0,-7.0,-8.0,-8.0,-9.0,-9.0,-8.0,-8.0,-7.0,-7.0,-6.0,-6.0,-7.0,-7.0,-6.0,-6.0,-5.0,-5.0,-4.0,-4.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0,-4.0,-4.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0,-6.0,-6.0,-7.0,-7.0,-8.0,-8.0,-7.0,-7.0,-8.0,-8.0,-7.0,-7.0,-6.0,-6.0,-5.0,-5.0,-4.0,-4.0,-3.0,-3.0,-2.0,-2.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-3.0,-3.0,-2.0,-2.0,-1.0,-1.0,0.0,0.0,-1.0,-1.0,0.0,0.0,1.0,1.0,2.0,2.0,1.0,1.0,0.0,0.0,1.0,1.0,0.0,0.0,-1.0,-1.0,-2.0,-2.0,-3.0,-3.0,-4.0,-4.0,-5.0,-5.0]}},"id":"2ae54155-c2e7-483e-a296-95145b4ab94b","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"dacfa1b0-fb47-427b-8cae-a42dbeb08ce3","type":"BoxAnnotation"},"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"}},"id":"efe8b53d-c7f9-4e7e-8003-bacf7f5b5777","type":"BoxZoomTool"},{"attributes":{"axis_label":"x","axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"formatter":{"id":"6328de43-6388-4e4c-8cdf-dc6cf418cdca","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"10.000000pt"},"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"},"ticker":{"id":"149a3678-7cd3-4221-bc25-7792909290ce","type":"BasicTicker"}},"id":"c3b949a3-6580-41db-b4d6-6b14c57aa474","type":"LinearAxis"},{"attributes":{},"id":"d801be90-1dc4-41af-83ea-e0484bb20a75","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"}},"id":"a6728eb9-bfb4-4230-8cea-748e71deea14","type":"PanTool"},{"attributes":{"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"}},"id":"d1d58e70-c71e-4d59-8cfd-ecfcfd0a5149","type":"HelpTool"},{"attributes":{},"id":"513e2a0b-22e2-4b15-8c35-f3970d837178","type":"X"},{"attributes":{"background_fill_color":{"value":"#E5E5E5"},"below":[{"id":"c3b949a3-6580-41db-b4d6-6b14c57aa474","type":"LinearAxis"}],"left":[{"id":"868cb517-f750-4c22-ad01-a085b46ea629","type":"LinearAxis"}],"plot_height":640,"plot_width":880,"renderers":[{"id":"c3b949a3-6580-41db-b4d6-6b14c57aa474","type":"LinearAxis"},{"id":"f7c2c2ea-9f78-41a9-9862-c3837ab69bc2","type":"Grid"},{"id":"868cb517-f750-4c22-ad01-a085b46ea629","type":"LinearAxis"},{"id":"156f6aea-b278-45cf-aa30-0a55f02257c2","type":"Grid"},{"id":"5aa5151b-3497-4f17-ae52-5b5feb870152","type":"GlyphRenderer"},{"id":"dacfa1b0-fb47-427b-8cae-a42dbeb08ce3","type":"BoxAnnotation"},{"id":"94d1ea61-b44a-4b7a-bcc9-c8430cdc080d","type":"GlyphRenderer"}],"title":"Step ggplot-based plot in Bokeh.","tool_events":{"id":"21a756f0-3d62-44cd-bfcf-a000ce356256","type":"ToolEvents"},"tools":[{"id":"a6728eb9-bfb4-4230-8cea-748e71deea14","type":"PanTool"},{"id":"2a6625d2-95e7-4d38-874e-a05c4dd2b457","type":"WheelZoomTool"},{"id":"efe8b53d-c7f9-4e7e-8003-bacf7f5b5777","type":"BoxZoomTool"},{"id":"77522bbe-8999-4754-a864-b42ef8d2b500","type":"PreviewSaveTool"},{"id":"febefbec-3f2a-47ba-ad98-0a837ac87f49","type":"ResizeTool"},{"id":"b2f8a197-04b2-4332-931a-6a4180c65f7a","type":"ResetTool"},{"id":"d1d58e70-c71e-4d59-8cfd-ecfcfd0a5149","type":"HelpTool"}],"x_range":{"id":"bed2c0b9-7753-42b7-b866-18b0f77c38ea","type":"DataRange1d"},"y_range":{"id":"538c17ad-7e56-4397-b402-976c125bd27c","type":"DataRange1d"}},"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"},{"attributes":{"callback":null,"column_names":["name"],"data":{"name":"ax_end"}},"id":"c2dc78fb-f4ae-4b58-bcc9-070623e8fe25","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"dacfa1b0-fb47-427b-8cae-a42dbeb08ce3","type":"BoxAnnotation"},{"attributes":{},"id":"21a756f0-3d62-44cd-bfcf-a000ce356256","type":"ToolEvents"},{"attributes":{"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"}},"id":"2a6625d2-95e7-4d38-874e-a05c4dd2b457","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"#000000"},"x":{"field":"Series 0"},"y":{"field":"Series 1"}},"id":"0f1964ac-672c-4467-8f9d-146de04ff669","type":"Line"},{"attributes":{"data_source":{"id":"c2dc78fb-f4ae-4b58-bcc9-070623e8fe25","type":"ColumnDataSource"},"glyph":{"id":"513e2a0b-22e2-4b15-8c35-f3970d837178","type":"X"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5aa5151b-3497-4f17-ae52-5b5feb870152","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"2ae54155-c2e7-483e-a296-95145b4ab94b","type":"ColumnDataSource"},"glyph":{"id":"0f1964ac-672c-4467-8f9d-146de04ff669","type":"Line"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"94d1ea61-b44a-4b7a-bcc9-c8430cdc080d","type":"GlyphRenderer"},{"attributes":{},"id":"6328de43-6388-4e4c-8cdf-dc6cf418cdca","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"}},"id":"b2f8a197-04b2-4332-931a-6a4180c65f7a","type":"ResetTool"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":1.4},"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"},"ticker":{"id":"3771dbad-429c-4543-aec5-6cd243ceef6b","type":"BasicTicker"}},"id":"156f6aea-b278-45cf-aa30-0a55f02257c2","type":"Grid"},{"attributes":{},"id":"149a3678-7cd3-4221-bc25-7792909290ce","type":"BasicTicker"},{"attributes":{"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"}},"id":"febefbec-3f2a-47ba-ad98-0a837ac87f49","type":"ResizeTool"},{"attributes":{"callback":null},"id":"bed2c0b9-7753-42b7-b866-18b0f77c38ea","type":"DataRange1d"},{"attributes":{"axis_label":"y","axis_label_text_font":"sans-serif","axis_label_text_font_size":{"value":"14.400000pt"},"formatter":{"id":"d801be90-1dc4-41af-83ea-e0484bb20a75","type":"BasicTickFormatter"},"major_label_text_font":"sans-serif","major_label_text_font_size":{"value":"10.000000pt"},"plot":{"id":"1605ba15-995f-42d9-bfc7-77df5147a952","type":"Plot"},"ticker":{"id":"3771dbad-429c-4543-aec5-6cd243ceef6b","type":"BasicTicker"}},"id":"868cb517-f750-4c22-ad01-a085b46ea629","type":"LinearAxis"}],"root_ids":["1605ba15-995f-42d9-bfc7-77df5147a952"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"065c9cb4-f933-4066-8bcd-a66d1edc49ed","elementid":"888a6d40-c664-490c-ab60-201e633a1bfe","modelid":"1605ba15-995f-42d9-bfc7-77df5147a952"}];
          
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