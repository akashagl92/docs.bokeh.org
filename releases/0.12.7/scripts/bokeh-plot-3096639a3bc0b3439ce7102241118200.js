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
      };var element = document.getElementById("f906a490-a644-4bb2-8c3b-37a6bb597170");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f906a490-a644-4bb2-8c3b-37a6bb597170' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"8dfd179f-4be5-4bdb-b21c-6e22ab8885c4":{"roots":{"references":[{"attributes":{},"id":"506debc5-5242-4227-ba46-2f2c49d34311","type":"LinearScale"},{"attributes":{"end":{"id":"51151ad2-e773-4901-b0e5-2b010e534ab2","type":"VeeHead"},"plot":{"id":"a0548236-3a3e-4426-ae88-2d2b37c494f5","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":2},"y_start":{"value":2}},"id":"4416c05b-d977-4898-89e2-528642a65cb8","type":"Arrow"},{"attributes":{"plot":{"id":"a0548236-3a3e-4426-ae88-2d2b37c494f5","type":"Plot"},"text":"NormalHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":1},"id":"7099f753-406e-4f6e-8a6d-32e21c71cfef","type":"Label"},{"attributes":{"plot":null,"text":""},"id":"55cb64e7-7d3d-4fc7-8c70-c693639899f5","type":"Title"},{"attributes":{"plot":null},"id":"51d63ac8-7587-48cd-afd8-b824ab3628d2","type":"NormalHead"},{"attributes":{"callback":null,"end":2.5,"start":-0.5},"id":"9912650d-8002-4668-ae10-1353a80db76b","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"d77196df-b3c5-4b22-9347-fb607d5a6d75","type":"Toolbar"},{"attributes":{"plot":null},"id":"51151ad2-e773-4901-b0e5-2b010e534ab2","type":"VeeHead"},{"attributes":{"plot":null},"id":"97cd5288-1e9e-4d6f-918e-8dca3833a6b1","type":"OpenHead"},{"attributes":{"callback":null},"id":"35ec6039-22a9-49e3-84b8-414c3eaf814a","type":"Range1d"},{"attributes":{"end":{"id":"51d63ac8-7587-48cd-afd8-b824ab3628d2","type":"NormalHead"},"plot":{"id":"a0548236-3a3e-4426-ae88-2d2b37c494f5","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":1},"y_start":{"value":1}},"id":"fd34c2ea-0b3d-4d91-916b-9aca8c2a69f8","type":"Arrow"},{"attributes":{"plot":{"id":"a0548236-3a3e-4426-ae88-2d2b37c494f5","type":"Plot"},"text":"VeeHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":2},"id":"375b18bd-643f-4978-ace3-30dd7282128a","type":"Label"},{"attributes":{"end":{"id":"97cd5288-1e9e-4d6f-918e-8dca3833a6b1","type":"OpenHead"},"plot":{"id":"a0548236-3a3e-4426-ae88-2d2b37c494f5","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.2},"x_start":{"value":0.2},"y_end":{"value":0},"y_start":{"value":0}},"id":"786f0167-d1bc-4f2b-bc44-8290f9590a79","type":"Arrow"},{"attributes":{"plot":{"id":"a0548236-3a3e-4426-ae88-2d2b37c494f5","type":"Plot"},"text":"OpenHead","text_baseline":"middle","x":0.2,"x_offset":20,"y":0},"id":"00aabfff-6150-4005-adaa-328e0fb76c31","type":"Label"},{"attributes":{"min_border_bottom":0,"min_border_left":0,"min_border_right":0,"min_border_top":0,"outline_line_color":{"value":null},"plot_height":105,"plot_width":150,"renderers":[{"id":"786f0167-d1bc-4f2b-bc44-8290f9590a79","type":"Arrow"},{"id":"00aabfff-6150-4005-adaa-328e0fb76c31","type":"Label"},{"id":"fd34c2ea-0b3d-4d91-916b-9aca8c2a69f8","type":"Arrow"},{"id":"7099f753-406e-4f6e-8a6d-32e21c71cfef","type":"Label"},{"id":"4416c05b-d977-4898-89e2-528642a65cb8","type":"Arrow"},{"id":"375b18bd-643f-4978-ace3-30dd7282128a","type":"Label"}],"title":{"id":"55cb64e7-7d3d-4fc7-8c70-c693639899f5","type":"Title"},"toolbar":{"id":"d77196df-b3c5-4b22-9347-fb607d5a6d75","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"35ec6039-22a9-49e3-84b8-414c3eaf814a","type":"Range1d"},"x_scale":{"id":"f0f3688a-d894-4c89-bef8-6207847f8ec9","type":"LinearScale"},"y_range":{"id":"9912650d-8002-4668-ae10-1353a80db76b","type":"Range1d"},"y_scale":{"id":"506debc5-5242-4227-ba46-2f2c49d34311","type":"LinearScale"}},"id":"a0548236-3a3e-4426-ae88-2d2b37c494f5","type":"Plot"},{"attributes":{},"id":"f0f3688a-d894-4c89-bef8-6207847f8ec9","type":"LinearScale"}],"root_ids":["a0548236-3a3e-4426-ae88-2d2b37c494f5"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"8dfd179f-4be5-4bdb-b21c-6e22ab8885c4","elementid":"f906a490-a644-4bb2-8c3b-37a6bb597170","modelid":"a0548236-3a3e-4426-ae88-2d2b37c494f5"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
