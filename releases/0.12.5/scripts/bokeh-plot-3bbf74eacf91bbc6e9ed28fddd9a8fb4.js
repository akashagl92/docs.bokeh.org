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
      };var element = document.getElementById("234ca193-7bd1-4204-9000-ca6baf9a3aac");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '234ca193-7bd1-4204-9000-ca6baf9a3aac' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"23f9ffd7-7abf-442e-9d21-4d73bce92fd1":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"e17c59c8-c7c0-4773-9b8a-ca2589b31bcc","type":"Title"},{"attributes":{"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"}},"id":"2d114076-953a-41c3-b59f-f72610808f6b","type":"ResetTool"},{"attributes":{},"id":"e1edcaa0-8637-4dfa-aef7-8501de32c1a5","type":"BasicTicker"},{"attributes":{"data_source":{"id":"a2cc9014-7cb0-4842-88d6-1dbb87e285a3","type":"ColumnDataSource"},"glyph":{"id":"b148e75c-daa2-44b4-a983-c0a5958ef2e5","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"37acc9d8-ef6a-427a-aa01-84ba065da45e","type":"Circle"},"selection_glyph":null},"id":"3a4cb693-2197-40d7-9456-7c2340e155f8","type":"GlyphRenderer"},{"attributes":{},"id":"f81d7a82-4fec-45fc-b206-3c4650c31658","type":"BasicTicker"},{"attributes":{"ticks":[2,3.5,4]},"id":"d5960e35-7062-4dbe-b02a-246952ef429e","type":"FixedTicker"},{"attributes":{"below":[{"id":"099ba5ea-6698-40e0-82a7-51093911c391","type":"LinearAxis"}],"left":[{"id":"417789f0-60cc-4a83-a32a-802491f24c47","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"099ba5ea-6698-40e0-82a7-51093911c391","type":"LinearAxis"},{"id":"07a17b27-eae6-4cab-8ea3-fbfeaf077afe","type":"Grid"},{"id":"417789f0-60cc-4a83-a32a-802491f24c47","type":"LinearAxis"},{"id":"cee84c29-3844-4b50-9cf3-8c3fbdffa344","type":"Grid"},{"id":"947eba98-77e6-4abc-9e81-3d4c5b926785","type":"BoxAnnotation"},{"id":"3a4cb693-2197-40d7-9456-7c2340e155f8","type":"GlyphRenderer"}],"title":{"id":"e17c59c8-c7c0-4773-9b8a-ca2589b31bcc","type":"Title"},"tool_events":{"id":"86077f7c-7233-4974-b469-548284ebfca5","type":"ToolEvents"},"toolbar":{"id":"ead1697d-5599-4aba-a4f1-0ecc165a8b7b","type":"Toolbar"},"x_range":{"id":"2496cf30-0779-4551-b610-8fa924afb84f","type":"DataRange1d"},"y_range":{"id":"9184a906-c486-42f2-86a5-7ec7b1fc31a1","type":"DataRange1d"}},"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"}},"id":"166d8613-98e0-4825-b1da-78bc55a87897","type":"PanTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"166d8613-98e0-4825-b1da-78bc55a87897","type":"PanTool"},{"id":"be0bf3c9-15e4-46d5-9852-90b7826d10b0","type":"WheelZoomTool"},{"id":"c07b223c-809f-4221-9cb8-8d447f6bc805","type":"BoxZoomTool"},{"id":"dcced86c-52de-4e13-a71b-3944ba528ac4","type":"SaveTool"},{"id":"2d114076-953a-41c3-b59f-f72610808f6b","type":"ResetTool"},{"id":"d8661ac5-39ba-496d-8576-d8a5c3695b61","type":"HelpTool"}]},"id":"ead1697d-5599-4aba-a4f1-0ecc165a8b7b","type":"Toolbar"},{"attributes":{"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"}},"id":"be0bf3c9-15e4-46d5-9852-90b7826d10b0","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"2496cf30-0779-4551-b610-8fa924afb84f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"19ac5e4d-d94b-48cd-8208-6702309b5fdc","type":"BasicTickFormatter"},"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1edcaa0-8637-4dfa-aef7-8501de32c1a5","type":"BasicTicker"}},"id":"417789f0-60cc-4a83-a32a-802491f24c47","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"947eba98-77e6-4abc-9e81-3d4c5b926785","type":"BoxAnnotation"},{"attributes":{},"id":"86077f7c-7233-4974-b469-548284ebfca5","type":"ToolEvents"},{"attributes":{"overlay":{"id":"947eba98-77e6-4abc-9e81-3d4c5b926785","type":"BoxAnnotation"},"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"}},"id":"c07b223c-809f-4221-9cb8-8d447f6bc805","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"}},"id":"dcced86c-52de-4e13-a71b-3944ba528ac4","type":"SaveTool"},{"attributes":{"callback":null},"id":"9184a906-c486-42f2-86a5-7ec7b1fc31a1","type":"DataRange1d"},{"attributes":{"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"},"ticker":{"id":"f81d7a82-4fec-45fc-b206-3c4650c31658","type":"BasicTicker"}},"id":"07a17b27-eae6-4cab-8ea3-fbfeaf077afe","type":"Grid"},{"attributes":{"formatter":{"id":"f0db6766-aa17-46c7-9e51-2280543280dd","type":"BasicTickFormatter"},"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"},"ticker":{"id":"d5960e35-7062-4dbe-b02a-246952ef429e","type":"FixedTicker"}},"id":"099ba5ea-6698-40e0-82a7-51093911c391","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"a2cc9014-7cb0-4842-88d6-1dbb87e285a3","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"},"ticker":{"id":"e1edcaa0-8637-4dfa-aef7-8501de32c1a5","type":"BasicTicker"}},"id":"cee84c29-3844-4b50-9cf3-8c3fbdffa344","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"37acc9d8-ef6a-427a-aa01-84ba065da45e","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"b148e75c-daa2-44b4-a983-c0a5958ef2e5","type":"Circle"},{"attributes":{},"id":"19ac5e4d-d94b-48cd-8208-6702309b5fdc","type":"BasicTickFormatter"},{"attributes":{},"id":"f0db6766-aa17-46c7-9e51-2280543280dd","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b84e55e7-e491-41df-98c6-40620413584f","subtype":"Figure","type":"Plot"}},"id":"d8661ac5-39ba-496d-8576-d8a5c3695b61","type":"HelpTool"}],"root_ids":["b84e55e7-e491-41df-98c6-40620413584f"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"23f9ffd7-7abf-442e-9d21-4d73bce92fd1","elementid":"234ca193-7bd1-4204-9000-ca6baf9a3aac","modelid":"b84e55e7-e491-41df-98c6-40620413584f"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
