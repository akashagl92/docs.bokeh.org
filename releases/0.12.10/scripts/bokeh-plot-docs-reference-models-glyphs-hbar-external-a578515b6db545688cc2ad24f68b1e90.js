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
      };var element = document.getElementById("9767ec5e-94ff-4fd9-bf30-f486aa771b92");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '9767ec5e-94ff-4fd9-bf30-f486aa771b92' but no matching script tag was found. ")
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
                    var docs_json = {"e9f32072-38cd-4715-bc52-a5a006239e91":{"roots":{"references":[{"attributes":{"data_source":{"id":"1176bd08-532f-4b67-a293-60a16b6e304a","type":"ColumnDataSource"},"glyph":{"id":"fb46c7c8-db84-41d4-bcd2-5aff5fc10b86","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0d95e999-df99-4adc-9fa3-1597b3ac5a61","type":"CDSView"}},"id":"c8c78039-7cf5-4a38-969c-5b5c7690e3a5","type":"GlyphRenderer"},{"attributes":{},"id":"47185ae8-9815-441c-b041-4938dd3d23c4","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1176bd08-532f-4b67-a293-60a16b6e304a","type":"ColumnDataSource"}},"id":"0d95e999-df99-4adc-9fa3-1597b3ac5a61","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"19c8a3f7-7873-4cb3-b4fa-4d7084719e6d","type":"Plot"},"ticker":{"id":"db27a6ec-159c-4ab1-9115-742da39649f5","type":"BasicTicker"}},"id":"c79a7c14-997d-4522-849d-39adb4c5eaf0","type":"Grid"},{"attributes":{},"id":"c4039deb-a6b0-4485-bd90-b0e5b80fc1cc","type":"BasicTicker"},{"attributes":{"callback":null},"id":"f76210f6-16b5-4318-802c-98d5ac631879","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"1176bd08-532f-4b67-a293-60a16b6e304a","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"fb46c7c8-db84-41d4-bcd2-5aff5fc10b86","type":"HBar"},{"attributes":{},"id":"b7273666-7995-46b7-91b2-8536446e79a3","type":"LinearScale"},{"attributes":{"plot":{"id":"19c8a3f7-7873-4cb3-b4fa-4d7084719e6d","type":"Plot"},"ticker":{"id":"c4039deb-a6b0-4485-bd90-b0e5b80fc1cc","type":"BasicTicker"}},"id":"8a2e788a-52af-4e29-8d20-bc81180b31b8","type":"Grid"},{"attributes":{},"id":"513169ec-c19b-4ec4-8da0-b601e79d5368","type":"LinearScale"},{"attributes":{"formatter":{"id":"47185ae8-9815-441c-b041-4938dd3d23c4","type":"BasicTickFormatter"},"plot":{"id":"19c8a3f7-7873-4cb3-b4fa-4d7084719e6d","type":"Plot"},"ticker":{"id":"db27a6ec-159c-4ab1-9115-742da39649f5","type":"BasicTicker"}},"id":"95611e96-eb41-4bbc-bef8-346e10f3855a","type":"LinearAxis"},{"attributes":{},"id":"ef2da124-1d9f-4f25-8c26-66cf166a6f40","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"fd492836-924d-4c32-8388-21d05d778bdf","type":"DataRange1d"},{"attributes":{"below":[{"id":"aa7cdb0c-529b-4eeb-8c51-814d0868c7d6","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"95611e96-eb41-4bbc-bef8-346e10f3855a","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"c8c78039-7cf5-4a38-969c-5b5c7690e3a5","type":"GlyphRenderer"},{"id":"aa7cdb0c-529b-4eeb-8c51-814d0868c7d6","type":"LinearAxis"},{"id":"95611e96-eb41-4bbc-bef8-346e10f3855a","type":"LinearAxis"},{"id":"8a2e788a-52af-4e29-8d20-bc81180b31b8","type":"Grid"},{"id":"c79a7c14-997d-4522-849d-39adb4c5eaf0","type":"Grid"}],"title":null,"toolbar":{"id":"f4e7e8c1-3792-488b-9ddb-249a269b015b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f76210f6-16b5-4318-802c-98d5ac631879","type":"DataRange1d"},"x_scale":{"id":"513169ec-c19b-4ec4-8da0-b601e79d5368","type":"LinearScale"},"y_range":{"id":"fd492836-924d-4c32-8388-21d05d778bdf","type":"DataRange1d"},"y_scale":{"id":"b7273666-7995-46b7-91b2-8536446e79a3","type":"LinearScale"}},"id":"19c8a3f7-7873-4cb3-b4fa-4d7084719e6d","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"f4e7e8c1-3792-488b-9ddb-249a269b015b","type":"Toolbar"},{"attributes":{},"id":"db27a6ec-159c-4ab1-9115-742da39649f5","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ef2da124-1d9f-4f25-8c26-66cf166a6f40","type":"BasicTickFormatter"},"plot":{"id":"19c8a3f7-7873-4cb3-b4fa-4d7084719e6d","type":"Plot"},"ticker":{"id":"c4039deb-a6b0-4485-bd90-b0e5b80fc1cc","type":"BasicTicker"}},"id":"aa7cdb0c-529b-4eeb-8c51-814d0868c7d6","type":"LinearAxis"}],"root_ids":["19c8a3f7-7873-4cb3-b4fa-4d7084719e6d"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"e9f32072-38cd-4715-bc52-a5a006239e91","elementid":"9767ec5e-94ff-4fd9-bf30-f486aa771b92","modelid":"19c8a3f7-7873-4cb3-b4fa-4d7084719e6d"}];
                
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
