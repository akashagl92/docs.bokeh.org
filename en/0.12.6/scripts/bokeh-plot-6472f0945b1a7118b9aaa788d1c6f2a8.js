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
      };var element = document.getElementById("567c52ad-41bd-4606-afec-28839fb01bd1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '567c52ad-41bd-4606-afec-28839fb01bd1' but no matching script tag was found. ")
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
                var docs_json = {"321e753d-acb1-47af-aae7-478bb4055df1":{"roots":{"references":[{"attributes":{"plot":{"id":"138090fd-429b-4739-9770-c434116cd91e","subtype":"Figure","type":"Plot"},"ticker":{"id":"418f9895-dba5-4825-b124-96788851fd9d","type":"BasicTicker"}},"id":"0b972e19-6fdd-4d46-adb5-13815e981f26","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2b58e98-80cb-4add-a8b0-f10da9781ed9","type":"Circle"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"fa7e92ca-a856-408e-9df9-1249ba9ea4ce","type":"Title"},{"attributes":{"callback":null,"plot":{"id":"138090fd-429b-4739-9770-c434116cd91e","subtype":"Figure","type":"Plot"}},"id":"c90218df-d91e-4378-b8e6-dc783f8fd61e","type":"TapTool"},{"attributes":{},"id":"317a53d5-9bf1-4108-8a3c-e90a8a0f8a8c","type":"BasicTicker"},{"attributes":{"callback":null},"id":"25431888-d80b-4f6e-ab35-5d95e47afca7","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c90218df-d91e-4378-b8e6-dc783f8fd61e","type":"TapTool"}]},"id":"1b748867-e2a7-42f7-accb-c09c650f1cbe","type":"Toolbar"},{"attributes":{},"id":"32777055-e991-4329-9679-870ba94d05be","type":"BasicTickFormatter"},{"attributes":{},"id":"818d9ae6-a7c5-470c-ba33-977bce88af53","type":"ToolEvents"},{"attributes":{},"id":"418f9895-dba5-4825-b124-96788851fd9d","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"138090fd-429b-4739-9770-c434116cd91e","subtype":"Figure","type":"Plot"},"ticker":{"id":"317a53d5-9bf1-4108-8a3c-e90a8a0f8a8c","type":"BasicTicker"}},"id":"c7ff3273-7244-467e-b0a3-84a5a4d79cc6","type":"Grid"},{"attributes":{},"id":"5be179ba-7448-40ba-89d7-057145dee9d5","type":"LinearScale"},{"attributes":{"formatter":{"id":"32777055-e991-4329-9679-870ba94d05be","type":"BasicTickFormatter"},"plot":{"id":"138090fd-429b-4739-9770-c434116cd91e","subtype":"Figure","type":"Plot"},"ticker":{"id":"418f9895-dba5-4825-b124-96788851fd9d","type":"BasicTicker"}},"id":"ee2fe535-a425-42f3-aaa3-4f576382fea1","type":"LinearAxis"},{"attributes":{},"id":"ae116e22-1bf7-462f-9c6c-16d8000b9711","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"e878487e-ff77-4611-89e9-05482b14cf90","type":"Circle"},{"attributes":{"callback":null},"id":"ca63e360-dba6-4b4b-b619-500d823d5ee4","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":"firebrick"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"fe20d6e3-1b2a-466e-a9bd-b29d2b838efc","type":"Circle"},{"attributes":{"formatter":{"id":"63c32a99-a453-4760-9549-cbe65758c7f8","type":"BasicTickFormatter"},"plot":{"id":"138090fd-429b-4739-9770-c434116cd91e","subtype":"Figure","type":"Plot"},"ticker":{"id":"317a53d5-9bf1-4108-8a3c-e90a8a0f8a8c","type":"BasicTicker"}},"id":"7e80dd29-f312-4c25-be38-4bd87794ddfc","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"f40b386c-d650-41bb-b68a-bdb4dd73a758","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"ee2fe535-a425-42f3-aaa3-4f576382fea1","type":"LinearAxis"}],"left":[{"id":"7e80dd29-f312-4c25-be38-4bd87794ddfc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"ee2fe535-a425-42f3-aaa3-4f576382fea1","type":"LinearAxis"},{"id":"0b972e19-6fdd-4d46-adb5-13815e981f26","type":"Grid"},{"id":"7e80dd29-f312-4c25-be38-4bd87794ddfc","type":"LinearAxis"},{"id":"c7ff3273-7244-467e-b0a3-84a5a4d79cc6","type":"Grid"},{"id":"c31f4041-d6e4-4122-a445-f09d6aa19525","type":"GlyphRenderer"}],"title":{"id":"fa7e92ca-a856-408e-9df9-1249ba9ea4ce","type":"Title"},"tool_events":{"id":"818d9ae6-a7c5-470c-ba33-977bce88af53","type":"ToolEvents"},"toolbar":{"id":"1b748867-e2a7-42f7-accb-c09c650f1cbe","type":"Toolbar"},"x_range":{"id":"ca63e360-dba6-4b4b-b619-500d823d5ee4","type":"DataRange1d"},"x_scale":{"id":"ae116e22-1bf7-462f-9c6c-16d8000b9711","type":"LinearScale"},"y_range":{"id":"25431888-d80b-4f6e-ab35-5d95e47afca7","type":"DataRange1d"},"y_scale":{"id":"5be179ba-7448-40ba-89d7-057145dee9d5","type":"LinearScale"}},"id":"138090fd-429b-4739-9770-c434116cd91e","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"f40b386c-d650-41bb-b68a-bdb4dd73a758","type":"ColumnDataSource"},"glyph":{"id":"b2b58e98-80cb-4add-a8b0-f10da9781ed9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e878487e-ff77-4611-89e9-05482b14cf90","type":"Circle"},"selection_glyph":{"id":"fe20d6e3-1b2a-466e-a9bd-b29d2b838efc","type":"Circle"}},"id":"c31f4041-d6e4-4122-a445-f09d6aa19525","type":"GlyphRenderer"},{"attributes":{},"id":"63c32a99-a453-4760-9549-cbe65758c7f8","type":"BasicTickFormatter"}],"root_ids":["138090fd-429b-4739-9770-c434116cd91e"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"321e753d-acb1-47af-aae7-478bb4055df1","elementid":"567c52ad-41bd-4606-afec-28839fb01bd1","modelid":"138090fd-429b-4739-9770-c434116cd91e"}];
                
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
