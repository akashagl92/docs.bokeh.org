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
      };var element = document.getElementById("aeb58eed-bf3d-4442-8edb-fe7cd2abc779");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'aeb58eed-bf3d-4442-8edb-fe7cd2abc779' but no matching script tag was found. ")
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
                    var docs_json = {"d0fd8283-9aa6-4b8e-9a99-c4bf72ffa215":{"roots":{"references":[{"attributes":{},"id":"92277858-3f02-4486-8f1a-f0d8e9690bbf","type":"BasicTicker"},{"attributes":{},"id":"96e2f711-d569-4472-a06d-5dfaa1a41a1f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"96e2f711-d569-4472-a06d-5dfaa1a41a1f","type":"BasicTickFormatter"},"plot":{"id":"6614985f-d393-484c-8e6d-dae9775c0218","subtype":"Figure","type":"Plot"},"ticker":{"id":"7103624d-75ea-461e-8ec3-147b690bc298","type":"BasicTicker"}},"id":"b0f7ee73-4a43-429c-b93a-49f5767cd8a2","type":"LinearAxis"},{"attributes":{"data_source":{"id":"fcb99ffa-9e5e-49b7-90d0-11c19f780306","type":"ColumnDataSource"},"glyph":{"id":"90f7f043-cf09-4520-80cc-1a1b783eb607","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"463353aa-f1ed-4686-99c9-7c79dc705bf4","type":"Circle"},"selection_glyph":{"id":"632c74de-a5c7-434d-a2ca-eff87fee0328","type":"Circle"},"view":{"id":"86dc7094-9ee6-4bd4-86cd-c97b94e5d29f","type":"CDSView"}},"id":"4b734953-6604-45d3-94fc-6a67be159274","type":"GlyphRenderer"},{"attributes":{},"id":"7103624d-75ea-461e-8ec3-147b690bc298","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"6614985f-d393-484c-8e6d-dae9775c0218","subtype":"Figure","type":"Plot"},"ticker":{"id":"7103624d-75ea-461e-8ec3-147b690bc298","type":"BasicTicker"}},"id":"59fe11ff-519f-455e-aea8-d63627d968db","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"90f7f043-cf09-4520-80cc-1a1b783eb607","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"fcb99ffa-9e5e-49b7-90d0-11c19f780306","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"b4664af2-082a-4e17-8f29-4601b4c63c32","type":"LinearAxis"}],"left":[{"id":"b0f7ee73-4a43-429c-b93a-49f5767cd8a2","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b4664af2-082a-4e17-8f29-4601b4c63c32","type":"LinearAxis"},{"id":"69c1c9eb-8600-4a71-a8a6-104c463191db","type":"Grid"},{"id":"b0f7ee73-4a43-429c-b93a-49f5767cd8a2","type":"LinearAxis"},{"id":"59fe11ff-519f-455e-aea8-d63627d968db","type":"Grid"},{"id":"4b734953-6604-45d3-94fc-6a67be159274","type":"GlyphRenderer"}],"title":{"id":"fa1bee8a-6621-4d90-be1d-aa524a420453","type":"Title"},"toolbar":{"id":"359713d3-483b-40d9-bd3a-14a6f3df87d7","type":"Toolbar"},"x_range":{"id":"eb47e9ac-bd5a-4bf5-b6e4-2bad3668e61c","type":"DataRange1d"},"x_scale":{"id":"2ebfa991-035d-4e0a-96af-7e19e83a8131","type":"LinearScale"},"y_range":{"id":"f109a2a8-87d0-44ce-82c0-4ee992b35715","type":"DataRange1d"},"y_scale":{"id":"c64b6c99-0f86-4e8f-8237-b1f36560abff","type":"LinearScale"}},"id":"6614985f-d393-484c-8e6d-dae9775c0218","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"fcb99ffa-9e5e-49b7-90d0-11c19f780306","type":"ColumnDataSource"}},"id":"86dc7094-9ee6-4bd4-86cd-c97b94e5d29f","type":"CDSView"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"fa1bee8a-6621-4d90-be1d-aa524a420453","type":"Title"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"463353aa-f1ed-4686-99c9-7c79dc705bf4","type":"Circle"},{"attributes":{"callback":null},"id":"eb47e9ac-bd5a-4bf5-b6e4-2bad3668e61c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"632c74de-a5c7-434d-a2ca-eff87fee0328","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f8c1c9d7-9a96-495c-9633-162505114a3e","type":"TapTool"}]},"id":"359713d3-483b-40d9-bd3a-14a6f3df87d7","type":"Toolbar"},{"attributes":{"callback":null},"id":"f8c1c9d7-9a96-495c-9633-162505114a3e","type":"TapTool"},{"attributes":{},"id":"2ebfa991-035d-4e0a-96af-7e19e83a8131","type":"LinearScale"},{"attributes":{"callback":null},"id":"f109a2a8-87d0-44ce-82c0-4ee992b35715","type":"DataRange1d"},{"attributes":{"plot":{"id":"6614985f-d393-484c-8e6d-dae9775c0218","subtype":"Figure","type":"Plot"},"ticker":{"id":"92277858-3f02-4486-8f1a-f0d8e9690bbf","type":"BasicTicker"}},"id":"69c1c9eb-8600-4a71-a8a6-104c463191db","type":"Grid"},{"attributes":{},"id":"c64b6c99-0f86-4e8f-8237-b1f36560abff","type":"LinearScale"},{"attributes":{"formatter":{"id":"66cc76d0-f159-4077-bc5f-a0060ce54d4a","type":"BasicTickFormatter"},"plot":{"id":"6614985f-d393-484c-8e6d-dae9775c0218","subtype":"Figure","type":"Plot"},"ticker":{"id":"92277858-3f02-4486-8f1a-f0d8e9690bbf","type":"BasicTicker"}},"id":"b4664af2-082a-4e17-8f29-4601b4c63c32","type":"LinearAxis"},{"attributes":{},"id":"66cc76d0-f159-4077-bc5f-a0060ce54d4a","type":"BasicTickFormatter"}],"root_ids":["6614985f-d393-484c-8e6d-dae9775c0218"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"d0fd8283-9aa6-4b8e-9a99-c4bf72ffa215","elementid":"aeb58eed-bf3d-4442-8edb-fe7cd2abc779","modelid":"6614985f-d393-484c-8e6d-dae9775c0218"}];
                
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
