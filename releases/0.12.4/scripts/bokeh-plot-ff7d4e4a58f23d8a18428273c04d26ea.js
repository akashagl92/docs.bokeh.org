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
      };var element = document.getElementById("3af26937-230e-44e6-9418-720aaf54ddd8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3af26937-230e-44e6-9418-720aaf54ddd8' but no matching script tag was found. ")
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
                var docs_json = {"f803e18a-e045-4b3c-b365-7853dd9a2eae":{"roots":{"references":[{"attributes":{},"id":"b5d302a3-0804-41eb-a888-5f8d107dede4","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b197dbc-9caa-4830-874d-d394d8eba6f0","type":"Circle"},{"attributes":{"callback":null},"id":"509601f8-f223-4dc6-84f0-63ce4f3d432b","type":"DataRange1d"},{"attributes":{},"id":"a2908d68-4353-414c-a6d8-318b0b24031e","type":"ToolEvents"},{"attributes":{"below":[{"id":"b21575b3-d524-4300-aa31-1955aebd6ca3","type":"LinearAxis"}],"left":[{"id":"687c4fcc-934d-43bc-98f1-cfeacea126e0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b21575b3-d524-4300-aa31-1955aebd6ca3","type":"LinearAxis"},{"id":"faee7f49-1e39-4d5a-8891-a90f650b72da","type":"Grid"},{"id":"687c4fcc-934d-43bc-98f1-cfeacea126e0","type":"LinearAxis"},{"id":"19d110e1-cc88-441f-8c08-c48fe79ff6ee","type":"Grid"},{"id":"cc745cff-c041-49de-af28-46d52b9b6c18","type":"GlyphRenderer"}],"title":{"id":"08ff18c6-4531-4ed3-a868-5a2a0b5161fa","type":"Title"},"tool_events":{"id":"a2908d68-4353-414c-a6d8-318b0b24031e","type":"ToolEvents"},"toolbar":{"id":"3e73b52c-7162-4e81-98db-70b93e28b3b2","type":"Toolbar"},"x_range":{"id":"aae02f17-5d76-487d-aac1-431778f4a801","type":"DataRange1d"},"y_range":{"id":"509601f8-f223-4dc6-84f0-63ce4f3d432b","type":"DataRange1d"}},"id":"835c7155-4973-4672-9fcf-9ab1324995fe","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"835c7155-4973-4672-9fcf-9ab1324995fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"a83da3f1-6f0e-4020-ad89-23a0fd1b4916","type":"BasicTicker"}},"id":"faee7f49-1e39-4d5a-8891-a90f650b72da","type":"Grid"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"08ff18c6-4531-4ed3-a868-5a2a0b5161fa","type":"Title"},{"attributes":{"formatter":{"id":"3afe2a4c-7fd8-4636-9647-1b182552ec91","type":"BasicTickFormatter"},"plot":{"id":"835c7155-4973-4672-9fcf-9ab1324995fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"a83da3f1-6f0e-4020-ad89-23a0fd1b4916","type":"BasicTicker"}},"id":"b21575b3-d524-4300-aa31-1955aebd6ca3","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","desc","y","imgs","fonts"],"data":{"desc":["A","b","C","d","E"],"fonts":["<i>italics</i>","<pre>pre</pre>","<b>bold</b>","<small>small</small>","<del>del</del>"],"imgs":["http://bokeh.pydata.org/static/snake.jpg","http://bokeh.pydata.org/static/snake2.png","http://bokeh.pydata.org/static/snake3D.png","http://bokeh.pydata.org/static/snake4_TheRevenge.png","http://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"22b74f26-d3a7-4f57-8fdb-dd0046713e57","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"835c7155-4973-4672-9fcf-9ab1324995fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"8bac95aa-34aa-41e7-9a60-1067b65734b6","type":"BasicTicker"}},"id":"19d110e1-cc88-441f-8c08-c48fe79ff6ee","type":"Grid"},{"attributes":{"callback":null},"id":"aae02f17-5d76-487d-aac1-431778f4a801","type":"DataRange1d"},{"attributes":{},"id":"3afe2a4c-7fd8-4636-9647-1b182552ec91","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b5d302a3-0804-41eb-a888-5f8d107dede4","type":"BasicTickFormatter"},"plot":{"id":"835c7155-4973-4672-9fcf-9ab1324995fe","subtype":"Figure","type":"Plot"},"ticker":{"id":"8bac95aa-34aa-41e7-9a60-1067b65734b6","type":"BasicTicker"}},"id":"687c4fcc-934d-43bc-98f1-cfeacea126e0","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"a91f2a7e-e219-4804-9ded-d9a3d5f7507d","type":"Circle"},{"attributes":{"callback":null,"plot":{"id":"835c7155-4973-4672-9fcf-9ab1324995fe","subtype":"Figure","type":"Plot"},"tooltips":"\n        <div>\n            <div>\n                <img\n                    src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                    style=\"float: left; margin: 0px 15px 15px 0px;\"\n                    border=\"2\"\n                ></img>\n            </div>\n            <div>\n                <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n                <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n            </div>\n            <div>\n                <span>@fonts{safe}</span>\n            </div>\n            <div>\n                <span style=\"font-size: 15px;\">Location</span>\n                <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n            </div>\n        </div>\n        "},"id":"8207c4a5-2a20-4063-a702-ee198af58fe5","type":"HoverTool"},{"attributes":{"data_source":{"id":"22b74f26-d3a7-4f57-8fdb-dd0046713e57","type":"ColumnDataSource"},"glyph":{"id":"3b197dbc-9caa-4830-874d-d394d8eba6f0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"a91f2a7e-e219-4804-9ded-d9a3d5f7507d","type":"Circle"},"selection_glyph":null},"id":"cc745cff-c041-49de-af28-46d52b9b6c18","type":"GlyphRenderer"},{"attributes":{},"id":"a83da3f1-6f0e-4020-ad89-23a0fd1b4916","type":"BasicTicker"},{"attributes":{},"id":"8bac95aa-34aa-41e7-9a60-1067b65734b6","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8207c4a5-2a20-4063-a702-ee198af58fe5","type":"HoverTool"}]},"id":"3e73b52c-7162-4e81-98db-70b93e28b3b2","type":"Toolbar"}],"root_ids":["835c7155-4973-4672-9fcf-9ab1324995fe"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"f803e18a-e045-4b3c-b365-7853dd9a2eae","elementid":"3af26937-230e-44e6-9418-720aaf54ddd8","modelid":"835c7155-4973-4672-9fcf-9ab1324995fe"}];
                
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
