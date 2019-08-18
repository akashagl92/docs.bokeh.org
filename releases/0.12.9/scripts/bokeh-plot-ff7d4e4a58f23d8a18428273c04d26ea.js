(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("4935108f-1483-4deb-b2d5-4b99469daaf8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '4935108f-1483-4deb-b2d5-4b99469daaf8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"6af31c69-10f7-48c2-bb6a-ad62f9f34b78":{"roots":{"references":[{"attributes":{"formatter":{"id":"682349fc-9b8e-477c-b6c3-868d85c51e2e","type":"BasicTickFormatter"},"plot":{"id":"08634e78-f155-424b-91a0-2f715746d0ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"99024e74-d8c6-43ee-b677-2dddd1d72465","type":"BasicTicker"}},"id":"35ebd26b-4c2b-401d-ab47-36b1d439113f","type":"LinearAxis"},{"attributes":{},"id":"99024e74-d8c6-43ee-b677-2dddd1d72465","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"08634e78-f155-424b-91a0-2f715746d0ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"99024e74-d8c6-43ee-b677-2dddd1d72465","type":"BasicTicker"}},"id":"6cb9d0dc-3e30-43fe-9acf-e6bf39bd8520","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y","desc","imgs","fonts"],"data":{"desc":["A","b","C","d","E"],"fonts":["<i>italics</i>","<pre>pre</pre>","<b>bold</b>","<small>small</small>","<del>del</del>"],"imgs":["https://bokeh.pydata.org/static/snake.jpg","https://bokeh.pydata.org/static/snake2.png","https://bokeh.pydata.org/static/snake3D.png","https://bokeh.pydata.org/static/snake4_TheRevenge.png","https://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"faed93ae-5e2e-49f5-aa0d-94a21b8dcd43","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"926b1ff9-7053-4abd-8e1f-6013f33faf4f","type":"Circle"},{"attributes":{"callback":null,"tooltips":"\n    <div>\n        <div>\n            <img\n                src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                style=\"float: left; margin: 0px 15px 15px 0px;\"\n                border=\"2\"\n            ></img>\n        </div>\n        <div>\n            <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n            <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n        </div>\n        <div>\n            <span>@fonts{safe}</span>\n        </div>\n        <div>\n            <span style=\"font-size: 15px;\">Location</span>\n            <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n        </div>\n    </div>\n    "},"id":"3da672ee-5f9a-4680-8118-c50ca6f8d403","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"74654795-0bc4-44be-9834-a841cf5c43a9","type":"Circle"},{"attributes":{"below":[{"id":"c992815a-876e-41f9-bb68-6dee45bc31fe","type":"LinearAxis"}],"left":[{"id":"35ebd26b-4c2b-401d-ab47-36b1d439113f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c992815a-876e-41f9-bb68-6dee45bc31fe","type":"LinearAxis"},{"id":"0ddd9cf1-d565-4b81-a279-789ee7e895ff","type":"Grid"},{"id":"35ebd26b-4c2b-401d-ab47-36b1d439113f","type":"LinearAxis"},{"id":"6cb9d0dc-3e30-43fe-9acf-e6bf39bd8520","type":"Grid"},{"id":"a04d05d7-a058-434a-8d61-7621e27f620c","type":"GlyphRenderer"}],"title":{"id":"d13d5d09-83fe-439b-b84e-32985bf60ea8","type":"Title"},"toolbar":{"id":"c449549d-973e-4a9d-95bc-c73241b76006","type":"Toolbar"},"x_range":{"id":"55b93680-2061-4f9c-95b1-1d9ef47e11fd","type":"DataRange1d"},"x_scale":{"id":"081ebefb-4f69-4805-9280-f7361dfc0f12","type":"LinearScale"},"y_range":{"id":"a9dde121-5e4f-40e8-8f1b-4cf17f2295c4","type":"DataRange1d"},"y_scale":{"id":"18eb0dff-b873-4a94-b01e-83f317feb19c","type":"LinearScale"}},"id":"08634e78-f155-424b-91a0-2f715746d0ef","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"faed93ae-5e2e-49f5-aa0d-94a21b8dcd43","type":"ColumnDataSource"},"glyph":{"id":"926b1ff9-7053-4abd-8e1f-6013f33faf4f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74654795-0bc4-44be-9834-a841cf5c43a9","type":"Circle"},"selection_glyph":null,"view":{"id":"586ba0ec-b452-480e-a202-81c50f905605","type":"CDSView"}},"id":"a04d05d7-a058-434a-8d61-7621e27f620c","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"55b93680-2061-4f9c-95b1-1d9ef47e11fd","type":"DataRange1d"},{"attributes":{"source":{"id":"faed93ae-5e2e-49f5-aa0d-94a21b8dcd43","type":"ColumnDataSource"}},"id":"586ba0ec-b452-480e-a202-81c50f905605","type":"CDSView"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"d13d5d09-83fe-439b-b84e-32985bf60ea8","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"3da672ee-5f9a-4680-8118-c50ca6f8d403","type":"HoverTool"}]},"id":"c449549d-973e-4a9d-95bc-c73241b76006","type":"Toolbar"},{"attributes":{},"id":"2a61cbca-6c4e-42a4-8912-f85445dd8b40","type":"BasicTickFormatter"},{"attributes":{},"id":"682349fc-9b8e-477c-b6c3-868d85c51e2e","type":"BasicTickFormatter"},{"attributes":{},"id":"081ebefb-4f69-4805-9280-f7361dfc0f12","type":"LinearScale"},{"attributes":{"callback":null},"id":"a9dde121-5e4f-40e8-8f1b-4cf17f2295c4","type":"DataRange1d"},{"attributes":{},"id":"18eb0dff-b873-4a94-b01e-83f317feb19c","type":"LinearScale"},{"attributes":{"plot":{"id":"08634e78-f155-424b-91a0-2f715746d0ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9605531-87b4-48cf-9e2d-828e1125f0ec","type":"BasicTicker"}},"id":"0ddd9cf1-d565-4b81-a279-789ee7e895ff","type":"Grid"},{"attributes":{"formatter":{"id":"2a61cbca-6c4e-42a4-8912-f85445dd8b40","type":"BasicTickFormatter"},"plot":{"id":"08634e78-f155-424b-91a0-2f715746d0ef","subtype":"Figure","type":"Plot"},"ticker":{"id":"e9605531-87b4-48cf-9e2d-828e1125f0ec","type":"BasicTicker"}},"id":"c992815a-876e-41f9-bb68-6dee45bc31fe","type":"LinearAxis"},{"attributes":{},"id":"e9605531-87b4-48cf-9e2d-828e1125f0ec","type":"BasicTicker"}],"root_ids":["08634e78-f155-424b-91a0-2f715746d0ef"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"6af31c69-10f7-48c2-bb6a-ad62f9f34b78","elementid":"4935108f-1483-4deb-b2d5-4b99469daaf8","modelid":"08634e78-f155-424b-91a0-2f715746d0ef"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
