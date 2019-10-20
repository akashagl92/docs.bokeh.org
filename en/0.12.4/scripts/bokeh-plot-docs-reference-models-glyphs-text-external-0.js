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
      };var element = document.getElementById("69323208-f94b-4807-8e3f-22241d9f7b0e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '69323208-f94b-4807-8e3f-22241d9f7b0e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"528a38ce-360d-4f39-b98a-134460db1e1a":{"roots":{"references":[{"attributes":{},"id":"46a181ee-e038-4f59-9303-81c16af35b05","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"3c2c3e64-04bf-42e9-a3ee-59953ecbfca2","type":"Toolbar"},{"attributes":{"formatter":{"id":"4d1ec4a1-d25e-4662-a984-8b47f6e4c9f6","type":"BasicTickFormatter"},"plot":{"id":"1a299f81-e712-487f-8061-c0d01fd2ddb9","type":"Plot"},"ticker":{"id":"46a181ee-e038-4f59-9303-81c16af35b05","type":"BasicTicker"}},"id":"b512f0a6-517b-44eb-bc59-ee762f808e09","type":"LinearAxis"},{"attributes":{},"id":"d28593b8-15ef-489c-ae5e-92321ed557b7","type":"BasicTicker"},{"attributes":{"below":[{"id":"1f097cd4-e834-4cbe-ad0d-2f45e9055d42","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"b512f0a6-517b-44eb-bc59-ee762f808e09","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"732588b9-3da3-4ffb-b3f4-0dc039c1cd7e","type":"GlyphRenderer"},{"id":"1f097cd4-e834-4cbe-ad0d-2f45e9055d42","type":"LinearAxis"},{"id":"b512f0a6-517b-44eb-bc59-ee762f808e09","type":"LinearAxis"},{"id":"0102618f-7a64-4b4f-8f42-a6bc9a3d28ba","type":"Grid"},{"id":"b36cfe5f-04aa-460b-9fac-9e069fd7e946","type":"Grid"}],"title":null,"tool_events":{"id":"ef0d4018-9e88-491c-ad2a-ec51b78927fe","type":"ToolEvents"},"toolbar":{"id":"3c2c3e64-04bf-42e9-a3ee-59953ecbfca2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"c5e9face-9268-438c-9619-b5b604f699d1","type":"DataRange1d"},"y_range":{"id":"154df2d6-185b-40ab-bdd4-f219dc748b05","type":"DataRange1d"}},"id":"1a299f81-e712-487f-8061-c0d01fd2ddb9","type":"Plot"},{"attributes":{"callback":null},"id":"c5e9face-9268-438c-9619-b5b604f699d1","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a79a5b6c-d020-47bd-85e5-60002f43b4a2","type":"Text"},{"attributes":{},"id":"5ae06cc5-3ec0-4b71-90fe-9e12ae304c2a","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"154df2d6-185b-40ab-bdd4-f219dc748b05","type":"DataRange1d"},{"attributes":{"formatter":{"id":"5ae06cc5-3ec0-4b71-90fe-9e12ae304c2a","type":"BasicTickFormatter"},"plot":{"id":"1a299f81-e712-487f-8061-c0d01fd2ddb9","type":"Plot"},"ticker":{"id":"d28593b8-15ef-489c-ae5e-92321ed557b7","type":"BasicTicker"}},"id":"1f097cd4-e834-4cbe-ad0d-2f45e9055d42","type":"LinearAxis"},{"attributes":{"plot":{"id":"1a299f81-e712-487f-8061-c0d01fd2ddb9","type":"Plot"},"ticker":{"id":"d28593b8-15ef-489c-ae5e-92321ed557b7","type":"BasicTicker"}},"id":"0102618f-7a64-4b4f-8f42-a6bc9a3d28ba","type":"Grid"},{"attributes":{"data_source":{"id":"df865faf-197f-4fe2-8a9c-7d6c2ca6ab42","type":"ColumnDataSource"},"glyph":{"id":"a79a5b6c-d020-47bd-85e5-60002f43b4a2","type":"Text"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"732588b9-3da3-4ffb-b3f4-0dc039c1cd7e","type":"GlyphRenderer"},{"attributes":{},"id":"4d1ec4a1-d25e-4662-a984-8b47f6e4c9f6","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"df865faf-197f-4fe2-8a9c-7d6c2ca6ab42","type":"ColumnDataSource"},{"attributes":{},"id":"ef0d4018-9e88-491c-ad2a-ec51b78927fe","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"1a299f81-e712-487f-8061-c0d01fd2ddb9","type":"Plot"},"ticker":{"id":"46a181ee-e038-4f59-9303-81c16af35b05","type":"BasicTicker"}},"id":"b36cfe5f-04aa-460b-9fac-9e069fd7e946","type":"Grid"}],"root_ids":["1a299f81-e712-487f-8061-c0d01fd2ddb9"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"528a38ce-360d-4f39-b98a-134460db1e1a","elementid":"69323208-f94b-4807-8e3f-22241d9f7b0e","modelid":"1a299f81-e712-487f-8061-c0d01fd2ddb9"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
