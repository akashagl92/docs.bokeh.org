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
      };var element = document.getElementById("e2d599fb-bae9-4a8f-8a4c-42191d7e1ca9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e2d599fb-bae9-4a8f-8a4c-42191d7e1ca9' but no matching script tag was found. ")
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
                    var docs_json = {"025cc77a-1454-4b3d-a347-efb9262563bc":{"roots":{"references":[{"attributes":{"plot":null},"id":"94ec4945-d4b7-48d6-92d9-3380cbd05069","type":"NormalHead"},{"attributes":{},"id":"f14610c6-7408-4e39-9d68-dc0527dd43c7","type":"LinearScale"},{"attributes":{"callback":null,"end":2.5,"start":-0.5},"id":"b648a614-f788-40be-80a7-f2ff48056dec","type":"Range1d"},{"attributes":{"end":{"id":"739123e8-a773-4de7-ae71-19eae41d7a49","type":"OpenHead"},"plot":{"id":"22d04a34-df42-49eb-9f85-c03b3f95f6a5","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":0},"y_start":{"value":0}},"id":"726ce9a5-a083-4b74-9f55-53beeba59725","type":"Arrow"},{"attributes":{"plot":null},"id":"739123e8-a773-4de7-ae71-19eae41d7a49","type":"OpenHead"},{"attributes":{"end":{"id":"94ec4945-d4b7-48d6-92d9-3380cbd05069","type":"NormalHead"},"plot":{"id":"22d04a34-df42-49eb-9f85-c03b3f95f6a5","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":1},"y_start":{"value":1}},"id":"9b9456f9-f263-427d-a30d-4da54e00c8c5","type":"Arrow"},{"attributes":{},"id":"2315821e-b75a-461c-b62d-2c1beb64b450","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"868aefea-0561-40e1-b877-da9414c2656b","type":"Toolbar"},{"attributes":{"plot":{"id":"22d04a34-df42-49eb-9f85-c03b3f95f6a5","type":"Plot"},"text":"OpenHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":0},"id":"cd4c2d52-e81f-4be0-9c93-17269a6d49c8","type":"Label"},{"attributes":{"plot":null,"text":""},"id":"1c06bf13-b4f4-4216-85a6-41c8099eef7f","type":"Title"},{"attributes":{"plot":{"id":"22d04a34-df42-49eb-9f85-c03b3f95f6a5","type":"Plot"},"text":"VeeHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":2},"id":"881dcfc9-2d68-4acd-85ad-7ad635b508fe","type":"Label"},{"attributes":{"plot":null},"id":"4cd477d6-6a1a-4b40-a8cc-1e82975c3118","type":"VeeHead"},{"attributes":{"callback":null},"id":"39725f17-abed-4063-ab1a-4cc09eae903d","type":"Range1d"},{"attributes":{"min_border_bottom":0,"min_border_left":0,"min_border_right":0,"min_border_top":0,"outline_line_color":{"value":null},"plot_height":105,"plot_width":150,"renderers":[{"id":"726ce9a5-a083-4b74-9f55-53beeba59725","type":"Arrow"},{"id":"cd4c2d52-e81f-4be0-9c93-17269a6d49c8","type":"Label"},{"id":"9b9456f9-f263-427d-a30d-4da54e00c8c5","type":"Arrow"},{"id":"04b6955e-98a2-4fb1-a209-0f4be5242570","type":"Label"},{"id":"b3ca899a-0217-46fa-ad7c-e25e5b1afe8c","type":"Arrow"},{"id":"881dcfc9-2d68-4acd-85ad-7ad635b508fe","type":"Label"}],"title":{"id":"1c06bf13-b4f4-4216-85a6-41c8099eef7f","type":"Title"},"toolbar":{"id":"868aefea-0561-40e1-b877-da9414c2656b","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"39725f17-abed-4063-ab1a-4cc09eae903d","type":"Range1d"},"x_scale":{"id":"2315821e-b75a-461c-b62d-2c1beb64b450","type":"LinearScale"},"y_range":{"id":"b648a614-f788-40be-80a7-f2ff48056dec","type":"Range1d"},"y_scale":{"id":"f14610c6-7408-4e39-9d68-dc0527dd43c7","type":"LinearScale"}},"id":"22d04a34-df42-49eb-9f85-c03b3f95f6a5","type":"Plot"},{"attributes":{"plot":{"id":"22d04a34-df42-49eb-9f85-c03b3f95f6a5","type":"Plot"},"text":"NormalHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":1},"id":"04b6955e-98a2-4fb1-a209-0f4be5242570","type":"Label"},{"attributes":{"end":{"id":"4cd477d6-6a1a-4b40-a8cc-1e82975c3118","type":"VeeHead"},"plot":{"id":"22d04a34-df42-49eb-9f85-c03b3f95f6a5","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":2},"y_start":{"value":2}},"id":"b3ca899a-0217-46fa-ad7c-e25e5b1afe8c","type":"Arrow"}],"root_ids":["22d04a34-df42-49eb-9f85-c03b3f95f6a5"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"025cc77a-1454-4b3d-a347-efb9262563bc","elementid":"e2d599fb-bae9-4a8f-8a4c-42191d7e1ca9","modelid":"22d04a34-df42-49eb-9f85-c03b3f95f6a5"}];
                
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
