document.addEventListener("DOMContentLoaded", function(event) {
    
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
      };var element = document.getElementById("9a6e18df-3c2e-4cd6-9737-1111601d913a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9a6e18df-3c2e-4cd6-9737-1111601d913a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"8f2d1b42-5a49-4c08-bb6e-197ad4717560":{"roots":{"references":[{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d7e0c58-eb81-40bd-b925-b54594286d1b","type":"Line"},{"attributes":{"data_source":{"id":"330299c7-393a-42b4-9e46-aa91d6c9a3b5","type":"ColumnDataSource"},"glyph":{"id":"5d7e0c58-eb81-40bd-b925-b54594286d1b","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"b75d85ce-11ce-45e2-9e8a-797e2d0848f9","type":"Line"},"selection_glyph":null},"id":"e3696942-7cbc-47c2-891f-4a868792684e","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"10346e8a-14b5-4bad-b7bc-3db523716a29","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"5dfe6c1a-4402-43da-9080-7bfa244cadf9","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"}},"id":"33ae97d6-3ddb-4742-8fae-1faf9a172709","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"10346e8a-14b5-4bad-b7bc-3db523716a29","type":"BoxAnnotation"},"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"}},"id":"fc26a1c9-ba7c-421a-8c18-3a8fe08f1465","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"728de767-8a5e-443e-8870-fdeb29e0fb21","type":"BasicTickFormatter"},"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"52f2fe95-13e9-4277-a749-2c5202e37d1b","type":"BasicTicker"}},"id":"7d0cefd5-5130-4718-9709-f98333d6c328","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5dfe6c1a-4402-43da-9080-7bfa244cadf9","type":"ColumnDataSource"},"glyph":{"id":"3ff1ec44-5bb3-48f7-a128-27cc20235395","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"543f1b10-0770-4a80-aae0-f10c13380d61","type":"Circle"},"selection_glyph":null},"id":"ea4eabd2-04d2-44f7-ab4f-d5bff7fbb00b","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4aaedf7a-379f-4730-bb9c-5451b11dbed5","type":"PanTool"},{"id":"33ae97d6-3ddb-4742-8fae-1faf9a172709","type":"WheelZoomTool"},{"id":"fc26a1c9-ba7c-421a-8c18-3a8fe08f1465","type":"BoxZoomTool"},{"id":"fa2cb39e-95da-4d3f-a0cb-2eda6f15611e","type":"SaveTool"},{"id":"e3205586-fc85-4d18-825d-a1b4dd0a40ab","type":"ResetTool"},{"id":"c7b8070c-a547-45a0-8b39-86582f2b89d0","type":"HelpTool"}]},"id":"f7f23d67-d931-4cc9-983d-8dd9d539b08a","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"330299c7-393a-42b4-9e46-aa91d6c9a3b5","type":"ColumnDataSource"},{"attributes":{},"id":"bdcdae96-b2f0-4a7b-9b71-949be1fb5774","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"52f2fe95-13e9-4277-a749-2c5202e37d1b","type":"BasicTicker"}},"id":"ba1edabe-b4b3-4509-a43d-c4a2aa75a50e","type":"Grid"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3ff1ec44-5bb3-48f7-a128-27cc20235395","type":"Circle"},{"attributes":{"callback":null},"id":"4452724d-8097-4432-ab58-6afa16818da1","type":"DataRange1d"},{"attributes":{"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"}},"id":"e3205586-fc85-4d18-825d-a1b4dd0a40ab","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"543f1b10-0770-4a80-aae0-f10c13380d61","type":"Circle"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b75d85ce-11ce-45e2-9e8a-797e2d0848f9","type":"Line"},{"attributes":{"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"}},"id":"c7b8070c-a547-45a0-8b39-86582f2b89d0","type":"HelpTool"},{"attributes":{"callback":null},"id":"9a800707-c8d9-4bf5-b6ea-aba35a1bbf99","type":"DataRange1d"},{"attributes":{"formatter":{"id":"fe5b5e29-96f2-4d1f-8fc2-09d4f180e35e","type":"BasicTickFormatter"},"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"2003f2a2-f132-40f3-a06b-f094cc041d29","type":"BasicTicker"}},"id":"53720970-ed5f-450e-9f61-f974176f4476","type":"LinearAxis"},{"attributes":{"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"},"ticker":{"id":"2003f2a2-f132-40f3-a06b-f094cc041d29","type":"BasicTicker"}},"id":"e2ebcfb5-c637-4dfc-bae5-1f53d7f7a0d2","type":"Grid"},{"attributes":{"below":[{"id":"53720970-ed5f-450e-9f61-f974176f4476","type":"LinearAxis"}],"left":[{"id":"7d0cefd5-5130-4718-9709-f98333d6c328","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"53720970-ed5f-450e-9f61-f974176f4476","type":"LinearAxis"},{"id":"e2ebcfb5-c637-4dfc-bae5-1f53d7f7a0d2","type":"Grid"},{"id":"7d0cefd5-5130-4718-9709-f98333d6c328","type":"LinearAxis"},{"id":"ba1edabe-b4b3-4509-a43d-c4a2aa75a50e","type":"Grid"},{"id":"10346e8a-14b5-4bad-b7bc-3db523716a29","type":"BoxAnnotation"},{"id":"e3696942-7cbc-47c2-891f-4a868792684e","type":"GlyphRenderer"},{"id":"ea4eabd2-04d2-44f7-ab4f-d5bff7fbb00b","type":"GlyphRenderer"}],"title":{"id":"77d57352-94ff-443c-8e39-a4a647252b0a","type":"Title"},"tool_events":{"id":"bdcdae96-b2f0-4a7b-9b71-949be1fb5774","type":"ToolEvents"},"toolbar":{"id":"f7f23d67-d931-4cc9-983d-8dd9d539b08a","type":"Toolbar"},"x_range":{"id":"4452724d-8097-4432-ab58-6afa16818da1","type":"DataRange1d"},"y_range":{"id":"9a800707-c8d9-4bf5-b6ea-aba35a1bbf99","type":"DataRange1d"}},"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2003f2a2-f132-40f3-a06b-f094cc041d29","type":"BasicTicker"},{"attributes":{"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"}},"id":"4aaedf7a-379f-4730-bb9c-5451b11dbed5","type":"PanTool"},{"attributes":{},"id":"728de767-8a5e-443e-8870-fdeb29e0fb21","type":"BasicTickFormatter"},{"attributes":{},"id":"fe5b5e29-96f2-4d1f-8fc2-09d4f180e35e","type":"BasicTickFormatter"},{"attributes":{},"id":"52f2fe95-13e9-4277-a749-2c5202e37d1b","type":"BasicTicker"},{"attributes":{"plot":{"id":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8","subtype":"Figure","type":"Plot"}},"id":"fa2cb39e-95da-4d3f-a0cb-2eda6f15611e","type":"SaveTool"},{"attributes":{"plot":null,"text":"example"},"id":"77d57352-94ff-443c-8e39-a4a647252b0a","type":"Title"}],"root_ids":["c4e60065-dfab-4a2e-81dc-8fbfddbd87c8"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"8f2d1b42-5a49-4c08-bb6e-197ad4717560","elementid":"9a6e18df-3c2e-4cd6-9737-1111601d913a","modelid":"c4e60065-dfab-4a2e-81dc-8fbfddbd87c8"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});