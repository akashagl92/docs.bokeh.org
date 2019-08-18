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
      };var element = document.getElementById("189b1a15-6210-4698-ae32-6d82aceca83e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '189b1a15-6210-4698-ae32-6d82aceca83e' but no matching script tag was found. ")
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
                var docs_json = {"8c3be149-7878-45ef-ae6f-8be265136b5b":{"roots":{"references":[{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"3c23bf01-0958-4182-bed0-96e7644fb852","type":"OpenURL"},{"attributes":{"plot":null,"text":"Click the Dots"},"id":"0173732f-b74e-4ba2-8a7e-0de42b32875b","type":"Title"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"e472a5c3-a69a-4dce-984e-19dedc618c62","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"12bd929b-bece-48a6-b6a6-4c99f1d4c0ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1517ae3-a17e-45fe-bb32-9bc14185c0d6","type":"BasicTicker"}},"id":"08754f1a-bfc5-47b0-8bea-a77ee3ac4b96","type":"Grid"},{"attributes":{"plot":{"id":"12bd929b-bece-48a6-b6a6-4c99f1d4c0ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef3cbbd4-50bb-4293-b997-b1119e622505","type":"BasicTicker"}},"id":"fe98c0ed-c7d5-4985-bb82-b3bd9be9706f","type":"Grid"},{"attributes":{},"id":"9a88d6d2-3ada-4b43-94d5-92a20d9146d3","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"5f637d64-cc9a-4961-9752-7f6fe2e4e91e","type":"LinearAxis"}],"left":[{"id":"f583f5b3-5ddc-4429-9c0e-117c8cbdb525","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"5f637d64-cc9a-4961-9752-7f6fe2e4e91e","type":"LinearAxis"},{"id":"fe98c0ed-c7d5-4985-bb82-b3bd9be9706f","type":"Grid"},{"id":"f583f5b3-5ddc-4429-9c0e-117c8cbdb525","type":"LinearAxis"},{"id":"08754f1a-bfc5-47b0-8bea-a77ee3ac4b96","type":"Grid"},{"id":"11519ce8-48a0-45a9-b4a2-8d8a968a1ef6","type":"GlyphRenderer"}],"title":{"id":"0173732f-b74e-4ba2-8a7e-0de42b32875b","type":"Title"},"tool_events":{"id":"67590dc7-4652-495e-bd76-dc7369c73127","type":"ToolEvents"},"toolbar":{"id":"146b6312-e36b-4021-b15a-5527588d4301","type":"Toolbar"},"x_range":{"id":"fbeba02e-13e1-4bd3-8127-1d4915bf87b8","type":"DataRange1d"},"y_range":{"id":"e3a1bfce-4289-49a8-8602-253a199d7d90","type":"DataRange1d"}},"id":"12bd929b-bece-48a6-b6a6-4c99f1d4c0ea","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"fbeba02e-13e1-4bd3-8127-1d4915bf87b8","type":"DataRange1d"},{"attributes":{"data_source":{"id":"62162e52-e5e1-412c-9119-08f986ededfa","type":"ColumnDataSource"},"glyph":{"id":"e472a5c3-a69a-4dce-984e-19dedc618c62","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fb454f28-8f1a-4b41-a50d-3e5352d41315","type":"Circle"},"selection_glyph":null},"id":"11519ce8-48a0-45a9-b4a2-8d8a968a1ef6","type":"GlyphRenderer"},{"attributes":{},"id":"67590dc7-4652-495e-bd76-dc7369c73127","type":"ToolEvents"},{"attributes":{"formatter":{"id":"493ee0a3-0ea9-44eb-bdd5-6ed8260943a5","type":"BasicTickFormatter"},"plot":{"id":"12bd929b-bece-48a6-b6a6-4c99f1d4c0ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"ef3cbbd4-50bb-4293-b997-b1119e622505","type":"BasicTicker"}},"id":"5f637d64-cc9a-4961-9752-7f6fe2e4e91e","type":"LinearAxis"},{"attributes":{"formatter":{"id":"9a88d6d2-3ada-4b43-94d5-92a20d9146d3","type":"BasicTickFormatter"},"plot":{"id":"12bd929b-bece-48a6-b6a6-4c99f1d4c0ea","subtype":"Figure","type":"Plot"},"ticker":{"id":"a1517ae3-a17e-45fe-bb32-9bc14185c0d6","type":"BasicTicker"}},"id":"f583f5b3-5ddc-4429-9c0e-117c8cbdb525","type":"LinearAxis"},{"attributes":{},"id":"ef3cbbd4-50bb-4293-b997-b1119e622505","type":"BasicTicker"},{"attributes":{},"id":"a1517ae3-a17e-45fe-bb32-9bc14185c0d6","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["color","x","y"],"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"62162e52-e5e1-412c-9119-08f986ededfa","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ad674376-0e9d-49dd-8abc-4daf21f2760f","type":"TapTool"}]},"id":"146b6312-e36b-4021-b15a-5527588d4301","type":"Toolbar"},{"attributes":{"callback":null},"id":"e3a1bfce-4289-49a8-8602-253a199d7d90","type":"DataRange1d"},{"attributes":{},"id":"493ee0a3-0ea9-44eb-bdd5-6ed8260943a5","type":"BasicTickFormatter"},{"attributes":{"callback":{"id":"3c23bf01-0958-4182-bed0-96e7644fb852","type":"OpenURL"},"plot":{"id":"12bd929b-bece-48a6-b6a6-4c99f1d4c0ea","subtype":"Figure","type":"Plot"}},"id":"ad674376-0e9d-49dd-8abc-4daf21f2760f","type":"TapTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb454f28-8f1a-4b41-a50d-3e5352d41315","type":"Circle"}],"root_ids":["12bd929b-bece-48a6-b6a6-4c99f1d4c0ea"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"8c3be149-7878-45ef-ae6f-8be265136b5b","elementid":"189b1a15-6210-4698-ae32-6d82aceca83e","modelid":"12bd929b-bece-48a6-b6a6-4c99f1d4c0ea"}];
                
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
