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
      };var element = document.getElementById("a1e97ca4-1115-440c-8fd5-5dcbfbd18090");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a1e97ca4-1115-440c-8fd5-5dcbfbd18090' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"cd45f7af-a147-4f2a-b868-d84f1cd00367":{"roots":{"references":[{"attributes":{"formatter":{"id":"33423e21-59ef-4f44-854a-02ce5045233c","type":"BasicTickFormatter"},"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"},"ticker":{"id":"202360e8-7f69-4319-999b-50887059bd18","type":"BasicTicker"}},"id":"9daa915b-c578-4474-9ecf-0decd54c1f8f","type":"LinearAxis"},{"attributes":{"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"},"ticker":{"id":"202360e8-7f69-4319-999b-50887059bd18","type":"BasicTicker"}},"id":"efdd5378-cb48-40ed-a4d9-5ab00e281f0e","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bdd436e7-aac6-433d-b262-fa68838fd5d2","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"18afa612-3cc7-43f1-92db-cd829f1c3019","type":"DataRange1d"},{"attributes":{},"id":"33423e21-59ef-4f44-854a-02ce5045233c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"652fc9a9-6543-4285-a404-3ea394d7d00c","type":"DataRange1d"},{"attributes":{"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"}},"id":"243f8155-bcb7-46c5-9d4c-f14861a937a0","type":"ResetTool"},{"attributes":{"below":[{"id":"9daa915b-c578-4474-9ecf-0decd54c1f8f","type":"LinearAxis"}],"left":[{"id":"2e909f22-0755-4c2b-a0c3-e5411230f8c7","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"9daa915b-c578-4474-9ecf-0decd54c1f8f","type":"LinearAxis"},{"id":"efdd5378-cb48-40ed-a4d9-5ab00e281f0e","type":"Grid"},{"id":"2e909f22-0755-4c2b-a0c3-e5411230f8c7","type":"LinearAxis"},{"id":"c7614532-bbb5-4d78-9bc1-488d82e1ace1","type":"Grid"},{"id":"bdd436e7-aac6-433d-b262-fa68838fd5d2","type":"BoxAnnotation"},{"id":"2cb95220-2793-4f5f-bc07-03a3ecc878db","type":"GlyphRenderer"}],"title":{"id":"c69a55e1-a5a0-4f0c-8d96-f01d7af47709","type":"Title"},"tool_events":{"id":"1005124b-78c6-45d1-9167-c790dd9e79b3","type":"ToolEvents"},"toolbar":{"id":"d19ee1bb-e9b7-4a14-b24e-1459dd2d2125","type":"Toolbar"},"x_range":{"id":"652fc9a9-6543-4285-a404-3ea394d7d00c","type":"DataRange1d"},"y_range":{"id":"18afa612-3cc7-43f1-92db-cd829f1c3019","type":"DataRange1d"}},"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"}},"id":"571d47ca-b795-402b-a2a1-47a8a89a0fc3","type":"PanTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"a1cd352a-b6e7-4140-869e-f80054785487","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"571d47ca-b795-402b-a2a1-47a8a89a0fc3","type":"PanTool"},{"id":"57978dff-e61b-43f3-867c-3bfde4932756","type":"WheelZoomTool"},{"id":"15cd5b9c-e5db-480b-94e4-aa64ba45f6ff","type":"BoxZoomTool"},{"id":"9146af13-0b4c-46f0-9ae3-5c95273ca66e","type":"SaveTool"},{"id":"243f8155-bcb7-46c5-9d4c-f14861a937a0","type":"ResetTool"},{"id":"d23a9983-baef-4f1f-9420-6c4f0c625371","type":"HelpTool"}]},"id":"d19ee1bb-e9b7-4a14-b24e-1459dd2d2125","type":"Toolbar"},{"attributes":{"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"}},"id":"57978dff-e61b-43f3-867c-3bfde4932756","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"b0e86ff1-2c18-4dd7-9bf9-f0d1973ddc3f","type":"BasicTickFormatter"},"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"},"ticker":{"id":"fded6e98-dbcd-4935-a615-507059c86d3d","type":"BasicTicker"}},"id":"2e909f22-0755-4c2b-a0c3-e5411230f8c7","type":"LinearAxis"},{"attributes":{},"id":"b0e86ff1-2c18-4dd7-9bf9-f0d1973ddc3f","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"}},"id":"9146af13-0b4c-46f0-9ae3-5c95273ca66e","type":"SaveTool"},{"attributes":{},"id":"fded6e98-dbcd-4935-a615-507059c86d3d","type":"BasicTicker"},{"attributes":{},"id":"202360e8-7f69-4319-999b-50887059bd18","type":"BasicTicker"},{"attributes":{"overlay":{"id":"bdd436e7-aac6-433d-b262-fa68838fd5d2","type":"BoxAnnotation"},"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"}},"id":"15cd5b9c-e5db-480b-94e4-aa64ba45f6ff","type":"BoxZoomTool"},{"attributes":{},"id":"1005124b-78c6-45d1-9167-c790dd9e79b3","type":"ToolEvents"},{"attributes":{"data_source":{"id":"a1cd352a-b6e7-4140-869e-f80054785487","type":"ColumnDataSource"},"glyph":{"id":"05650e98-0599-418b-ad5a-6f832a62cc5a","type":"Wedge"},"hover_glyph":null,"nonselection_glyph":{"id":"cdcd7250-db82-4f1e-9f03-6a9b65dee803","type":"Wedge"},"selection_glyph":null},"id":"2cb95220-2793-4f5f-bc07-03a3ecc878db","type":"GlyphRenderer"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_color":{"value":"#2b8cbe"},"line_color":{"value":"#2b8cbe"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"05650e98-0599-418b-ad5a-6f832a62cc5a","type":"Wedge"},{"attributes":{"dimension":1,"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"},"ticker":{"id":"fded6e98-dbcd-4935-a615-507059c86d3d","type":"BasicTicker"}},"id":"c7614532-bbb5-4d78-9bc1-488d82e1ace1","type":"Grid"},{"attributes":{"plot":{"id":"232128db-d6ae-464c-9e4f-c077edc66c54","subtype":"Figure","type":"Plot"}},"id":"d23a9983-baef-4f1f-9420-6c4f0c625371","type":"HelpTool"},{"attributes":{"end_angle":{"units":"rad","value":4.1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"screen","value":15},"start_angle":{"units":"rad","value":0.6},"x":{"field":"x"},"y":{"field":"y"}},"id":"cdcd7250-db82-4f1e-9f03-6a9b65dee803","type":"Wedge"},{"attributes":{"plot":null,"text":null},"id":"c69a55e1-a5a0-4f0c-8d96-f01d7af47709","type":"Title"}],"root_ids":["232128db-d6ae-464c-9e4f-c077edc66c54"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"cd45f7af-a147-4f2a-b868-d84f1cd00367","elementid":"a1e97ca4-1115-440c-8fd5-5dcbfbd18090","modelid":"232128db-d6ae-464c-9e4f-c077edc66c54"}];
              
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