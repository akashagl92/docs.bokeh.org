(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
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
      };var element = document.getElementById("f842bf74-bb8b-4398-8929-7c5904ddf2f6");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f842bf74-bb8b-4398-8929-7c5904ddf2f6' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"3eeef155-b828-47cd-94ba-cb6d12246572":{"roots":{"references":[{"attributes":{"data_source":{"id":"59dc92e1-9962-43ce-a4c2-75e26054a6e0","type":"ColumnDataSource"},"glyph":{"id":"948bb7e1-35b3-4d1a-a7b7-bafddca10954","type":"SquareCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"dc3fbaa1-b4c1-461a-b213-d45353e92523","type":"SquareCross"},"selection_glyph":null},"id":"01590796-c51a-4229-9675-9472577a9044","type":"GlyphRenderer"},{"attributes":{},"id":"1e93516a-7203-46c0-87d7-a13e2aca6f1f","type":"BasicTickFormatter"},{"attributes":{},"id":"17e0e791-18d1-496b-b585-ce1fa87327ea","type":"BasicTicker"},{"attributes":{"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"}},"id":"14219569-e396-451c-b648-28eaa204d13b","type":"HelpTool"},{"attributes":{"overlay":{"id":"797f0198-6ba7-46f2-9921-45885efe6b4a","type":"BoxAnnotation"},"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"}},"id":"f6d2c831-8d4a-4ed6-8121-0445c8127c69","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"91a93502-0e0b-4256-80c7-114ce7444c81","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"17e0e791-18d1-496b-b585-ce1fa87327ea","type":"BasicTicker"}},"id":"a9f36868-7d2d-41a2-ae17-85678d11fc28","type":"Grid"},{"attributes":{"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"}},"id":"ed45f5e3-2348-4193-aa6a-ddeaefad3072","type":"SaveTool"},{"attributes":{"callback":null},"id":"c9d92c66-dd79-4759-a3d2-02553893dd41","type":"DataRange1d"},{"attributes":{"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"}},"id":"4ef3fa4b-8d43-4ffe-b203-fc773067efd2","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"dc3fbaa1-b4c1-461a-b213-d45353e92523","type":"SquareCross"},{"attributes":{"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"}},"id":"8e33dc30-5c95-4d60-8ddf-5432a676ba61","type":"WheelZoomTool"},{"attributes":{},"id":"95106a84-6481-4729-9826-9356e5c41fc3","type":"BasicTicker"},{"attributes":{"callback":null},"id":"2bd0c3f9-4f3f-4268-837c-d01c85c2fd16","type":"DataRange1d"},{"attributes":{"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"95106a84-6481-4729-9826-9356e5c41fc3","type":"BasicTicker"}},"id":"29312ce4-19f1-4d8b-a086-7e459315631c","type":"Grid"},{"attributes":{"formatter":{"id":"1e93516a-7203-46c0-87d7-a13e2aca6f1f","type":"BasicTickFormatter"},"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"17e0e791-18d1-496b-b585-ce1fa87327ea","type":"BasicTicker"}},"id":"6aad7829-3f9b-499c-a1f6-e2179287dffc","type":"LinearAxis"},{"attributes":{"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"}},"id":"3bbd6a65-c092-437f-b1a6-540df1b98394","type":"ResetTool"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"#7FC97F"},"line_width":{"value":2},"size":{"field":"size","units":"screen"},"x":{"field":"x"},"y":{"field":"y"}},"id":"948bb7e1-35b3-4d1a-a7b7-bafddca10954","type":"SquareCross"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"797f0198-6ba7-46f2-9921-45885efe6b4a","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4ef3fa4b-8d43-4ffe-b203-fc773067efd2","type":"PanTool"},{"id":"8e33dc30-5c95-4d60-8ddf-5432a676ba61","type":"WheelZoomTool"},{"id":"f6d2c831-8d4a-4ed6-8121-0445c8127c69","type":"BoxZoomTool"},{"id":"ed45f5e3-2348-4193-aa6a-ddeaefad3072","type":"SaveTool"},{"id":"3bbd6a65-c092-437f-b1a6-540df1b98394","type":"ResetTool"},{"id":"14219569-e396-451c-b648-28eaa204d13b","type":"HelpTool"}]},"id":"bb7e70e5-a53b-4c09-b3a1-eb1901eb0a30","type":"Toolbar"},{"attributes":{},"id":"7d161f82-3758-47f4-b2b4-d6c67322a52c","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"7d161f82-3758-47f4-b2b4-d6c67322a52c","type":"BasicTickFormatter"},"plot":{"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"},"ticker":{"id":"95106a84-6481-4729-9826-9356e5c41fc3","type":"BasicTicker"}},"id":"7cd3c67b-4454-4c98-adfa-0de36ce75b8a","type":"LinearAxis"},{"attributes":{"below":[{"id":"7cd3c67b-4454-4c98-adfa-0de36ce75b8a","type":"LinearAxis"}],"left":[{"id":"6aad7829-3f9b-499c-a1f6-e2179287dffc","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"7cd3c67b-4454-4c98-adfa-0de36ce75b8a","type":"LinearAxis"},{"id":"29312ce4-19f1-4d8b-a086-7e459315631c","type":"Grid"},{"id":"6aad7829-3f9b-499c-a1f6-e2179287dffc","type":"LinearAxis"},{"id":"a9f36868-7d2d-41a2-ae17-85678d11fc28","type":"Grid"},{"id":"797f0198-6ba7-46f2-9921-45885efe6b4a","type":"BoxAnnotation"},{"id":"01590796-c51a-4229-9675-9472577a9044","type":"GlyphRenderer"}],"title":{"id":"91a93502-0e0b-4256-80c7-114ce7444c81","type":"Title"},"tool_events":{"id":"ec0797e1-360b-4327-a6d8-754959fe9118","type":"ToolEvents"},"toolbar":{"id":"bb7e70e5-a53b-4c09-b3a1-eb1901eb0a30","type":"Toolbar"},"x_range":{"id":"2bd0c3f9-4f3f-4268-837c-d01c85c2fd16","type":"DataRange1d"},"x_scale":{"id":"ef6d89b6-4e54-4319-ab4a-645de0c13fa0","type":"LinearScale"},"y_range":{"id":"c9d92c66-dd79-4759-a3d2-02553893dd41","type":"DataRange1d"},"y_scale":{"id":"5b1aecb3-4248-4933-9f16-7fb32264c5c8","type":"LinearScale"}},"id":"647ba986-cced-4645-b935-aae20968f5a2","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","size"],"data":{"size":[10,20,25],"x":[1,2,3],"y":[1,2,3]}},"id":"59dc92e1-9962-43ce-a4c2-75e26054a6e0","type":"ColumnDataSource"},{"attributes":{},"id":"ef6d89b6-4e54-4319-ab4a-645de0c13fa0","type":"LinearScale"},{"attributes":{},"id":"ec0797e1-360b-4327-a6d8-754959fe9118","type":"ToolEvents"},{"attributes":{},"id":"5b1aecb3-4248-4933-9f16-7fb32264c5c8","type":"LinearScale"}],"root_ids":["647ba986-cced-4645-b935-aae20968f5a2"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"3eeef155-b828-47cd-94ba-cb6d12246572","elementid":"f842bf74-bb8b-4398-8929-7c5904ddf2f6","modelid":"647ba986-cced-4645-b935-aae20968f5a2"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
