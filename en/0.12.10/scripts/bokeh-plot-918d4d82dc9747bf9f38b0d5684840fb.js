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
      };var element = document.getElementById("9c7a7f32-e882-4054-af5a-bb7dfd284b98");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9c7a7f32-e882-4054-af5a-bb7dfd284b98' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"754f0dc5-9cbd-4028-bce9-4c9e69ba7d82":{"roots":{"references":[{"attributes":{"callback":null},"id":"1249a909-7613-42c9-9caa-443efa57e7d3","type":"DataRange1d"},{"attributes":{},"id":"db831beb-2708-425a-be7c-648097149249","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d4a1596d-5883-4516-829f-e27788272127","type":"Circle"},{"attributes":{"callback":null},"id":"d18b18d3-502a-42a1-b76a-fda7792e048c","type":"DataRange1d"},{"attributes":{"callback":{"id":"e35d8920-5aa2-47c5-b962-fe2b6189a2a5","type":"OpenURL"}},"id":"7297afdb-b59f-4465-bf6a-91381334a2b9","type":"TapTool"},{"attributes":{"source":{"id":"050920f9-605b-49dc-90b8-14995359cc00","type":"ColumnDataSource"}},"id":"af7b4f43-c1f9-4e16-842c-3ae5fbba0d26","type":"CDSView"},{"attributes":{},"id":"7ff25b1f-85f8-4baf-9308-199c52223c2e","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","color"],"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"050920f9-605b-49dc-90b8-14995359cc00","type":"ColumnDataSource"},{"attributes":{},"id":"3e0d0877-3406-4c7d-ae71-92cad597d30d","type":"BasicTicker"},{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"e35d8920-5aa2-47c5-b962-fe2b6189a2a5","type":"OpenURL"},{"attributes":{},"id":"33605a0e-bc21-4b00-bfdb-929080136c18","type":"BasicTicker"},{"attributes":{"formatter":{"id":"db831beb-2708-425a-be7c-648097149249","type":"BasicTickFormatter"},"plot":{"id":"8cc7e3f1-0716-4404-b4fb-ba6e8c8dd80e","subtype":"Figure","type":"Plot"},"ticker":{"id":"33605a0e-bc21-4b00-bfdb-929080136c18","type":"BasicTicker"}},"id":"c1988325-120b-4b40-8328-05b50f66aba0","type":"LinearAxis"},{"attributes":{"plot":{"id":"8cc7e3f1-0716-4404-b4fb-ba6e8c8dd80e","subtype":"Figure","type":"Plot"},"ticker":{"id":"33605a0e-bc21-4b00-bfdb-929080136c18","type":"BasicTicker"}},"id":"a8c64b2b-b6e7-47b5-a0b3-5214d9077457","type":"Grid"},{"attributes":{},"id":"025b9858-8df8-4a7b-99bb-ed89d37e6e55","type":"LinearScale"},{"attributes":{},"id":"9f217f24-0186-4095-a483-723385ac2ec7","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"8cc7e3f1-0716-4404-b4fb-ba6e8c8dd80e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e0d0877-3406-4c7d-ae71-92cad597d30d","type":"BasicTicker"}},"id":"f02a3664-d3af-44ed-84e0-51d5524326e8","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"36a7a3f8-e894-4644-8a25-d8bf24563103","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"7297afdb-b59f-4465-bf6a-91381334a2b9","type":"TapTool"}]},"id":"5ac1e5c6-1fc5-4744-8279-3c66454177a5","type":"Toolbar"},{"attributes":{"data_source":{"id":"050920f9-605b-49dc-90b8-14995359cc00","type":"ColumnDataSource"},"glyph":{"id":"d4a1596d-5883-4516-829f-e27788272127","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"36a7a3f8-e894-4644-8a25-d8bf24563103","type":"Circle"},"selection_glyph":null,"view":{"id":"af7b4f43-c1f9-4e16-842c-3ae5fbba0d26","type":"CDSView"}},"id":"96dbeb31-7729-4458-bb55-c668e0646e2c","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"7ff25b1f-85f8-4baf-9308-199c52223c2e","type":"BasicTickFormatter"},"plot":{"id":"8cc7e3f1-0716-4404-b4fb-ba6e8c8dd80e","subtype":"Figure","type":"Plot"},"ticker":{"id":"3e0d0877-3406-4c7d-ae71-92cad597d30d","type":"BasicTicker"}},"id":"15d311c5-72f4-4abb-913a-c01a90b17c74","type":"LinearAxis"},{"attributes":{"below":[{"id":"c1988325-120b-4b40-8328-05b50f66aba0","type":"LinearAxis"}],"left":[{"id":"15d311c5-72f4-4abb-913a-c01a90b17c74","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"c1988325-120b-4b40-8328-05b50f66aba0","type":"LinearAxis"},{"id":"a8c64b2b-b6e7-47b5-a0b3-5214d9077457","type":"Grid"},{"id":"15d311c5-72f4-4abb-913a-c01a90b17c74","type":"LinearAxis"},{"id":"f02a3664-d3af-44ed-84e0-51d5524326e8","type":"Grid"},{"id":"96dbeb31-7729-4458-bb55-c668e0646e2c","type":"GlyphRenderer"}],"title":{"id":"56d1cbaa-8ec7-4274-b26e-0a1c23f7101b","type":"Title"},"toolbar":{"id":"5ac1e5c6-1fc5-4744-8279-3c66454177a5","type":"Toolbar"},"x_range":{"id":"1249a909-7613-42c9-9caa-443efa57e7d3","type":"DataRange1d"},"x_scale":{"id":"9f217f24-0186-4095-a483-723385ac2ec7","type":"LinearScale"},"y_range":{"id":"d18b18d3-502a-42a1-b76a-fda7792e048c","type":"DataRange1d"},"y_scale":{"id":"025b9858-8df8-4a7b-99bb-ed89d37e6e55","type":"LinearScale"}},"id":"8cc7e3f1-0716-4404-b4fb-ba6e8c8dd80e","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Click the Dots"},"id":"56d1cbaa-8ec7-4274-b26e-0a1c23f7101b","type":"Title"}],"root_ids":["8cc7e3f1-0716-4404-b4fb-ba6e8c8dd80e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"754f0dc5-9cbd-4028-bce9-4c9e69ba7d82","elementid":"9c7a7f32-e882-4054-af5a-bb7dfd284b98","modelid":"8cc7e3f1-0716-4404-b4fb-ba6e8c8dd80e"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
