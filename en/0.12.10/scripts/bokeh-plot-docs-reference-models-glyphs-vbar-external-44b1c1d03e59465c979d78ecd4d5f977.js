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
      };var element = document.getElementById("6c78ce98-22cd-4a93-b86a-90e7de7b8f11");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '6c78ce98-22cd-4a93-b86a-90e7de7b8f11' but no matching script tag was found. ")
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
                    var docs_json = {"ccd1bfea-2935-4228-ba77-ed43c0efc343":{"roots":{"references":[{"attributes":{"formatter":{"id":"ec5b5a06-4452-43e7-9476-e807e02487a5","type":"BasicTickFormatter"},"plot":{"id":"8925c2bb-995c-4a35-938f-ca6ed84f427d","type":"Plot"},"ticker":{"id":"1bea4e54-a885-4225-a407-bfaf91b9902d","type":"BasicTicker"}},"id":"c6166b24-54c6-450a-a0fc-ddf2c82575fe","type":"LinearAxis"},{"attributes":{},"id":"4759060b-61f6-4327-9b3d-646bf44fc4f0","type":"LinearScale"},{"attributes":{"formatter":{"id":"ca953911-5ba8-4025-a8b4-3ebad67b9ad9","type":"BasicTickFormatter"},"plot":{"id":"8925c2bb-995c-4a35-938f-ca6ed84f427d","type":"Plot"},"ticker":{"id":"8c28fba0-f859-468b-aa9d-c82f10dfd661","type":"BasicTicker"}},"id":"38b37f33-e611-48a4-8ac7-c7708d99ba7e","type":"LinearAxis"},{"attributes":{},"id":"01c54715-0510-4dd5-b83f-f31ef07af0bf","type":"LinearScale"},{"attributes":{},"id":"ec5b5a06-4452-43e7-9476-e807e02487a5","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"8925c2bb-995c-4a35-938f-ca6ed84f427d","type":"Plot"},"ticker":{"id":"8c28fba0-f859-468b-aa9d-c82f10dfd661","type":"BasicTicker"}},"id":"97a8f23a-f4b6-49d3-91da-9fb1bae99b17","type":"Grid"},{"attributes":{"source":{"id":"f8e16b52-47e2-44a7-b7e4-582a92fa118b","type":"ColumnDataSource"}},"id":"45eb384b-7832-4b2c-8099-fa3317d7960b","type":"CDSView"},{"attributes":{"below":[{"id":"38b37f33-e611-48a4-8ac7-c7708d99ba7e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c6166b24-54c6-450a-a0fc-ddf2c82575fe","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"f874ee6c-a677-4dc4-83ef-3a75ade49831","type":"GlyphRenderer"},{"id":"38b37f33-e611-48a4-8ac7-c7708d99ba7e","type":"LinearAxis"},{"id":"c6166b24-54c6-450a-a0fc-ddf2c82575fe","type":"LinearAxis"},{"id":"97a8f23a-f4b6-49d3-91da-9fb1bae99b17","type":"Grid"},{"id":"2034232d-97a9-4570-9ad8-110df93360b4","type":"Grid"}],"title":null,"toolbar":{"id":"bb9a3f0b-d487-483b-a644-d980c5f558bb","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"08f987e7-a732-40bb-afda-c53ba47fd900","type":"DataRange1d"},"x_scale":{"id":"4759060b-61f6-4327-9b3d-646bf44fc4f0","type":"LinearScale"},"y_range":{"id":"212f77ff-7baa-480b-987d-8ff4ebe6c30a","type":"DataRange1d"},"y_scale":{"id":"01c54715-0510-4dd5-b83f-f31ef07af0bf","type":"LinearScale"}},"id":"8925c2bb-995c-4a35-938f-ca6ed84f427d","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"8925c2bb-995c-4a35-938f-ca6ed84f427d","type":"Plot"},"ticker":{"id":"1bea4e54-a885-4225-a407-bfaf91b9902d","type":"BasicTicker"}},"id":"2034232d-97a9-4570-9ad8-110df93360b4","type":"Grid"},{"attributes":{"fill_color":{"value":"#b3de69"},"top":{"field":"top"},"width":{"value":0.5},"x":{"field":"x"}},"id":"b75843d3-9666-4d7d-992b-7e46d4505e6b","type":"VBar"},{"attributes":{"callback":null,"column_names":["x","top"],"data":{"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"f8e16b52-47e2-44a7-b7e4-582a92fa118b","type":"ColumnDataSource"},{"attributes":{},"id":"8c28fba0-f859-468b-aa9d-c82f10dfd661","type":"BasicTicker"},{"attributes":{},"id":"ca953911-5ba8-4025-a8b4-3ebad67b9ad9","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f8e16b52-47e2-44a7-b7e4-582a92fa118b","type":"ColumnDataSource"},"glyph":{"id":"b75843d3-9666-4d7d-992b-7e46d4505e6b","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"45eb384b-7832-4b2c-8099-fa3317d7960b","type":"CDSView"}},"id":"f874ee6c-a677-4dc4-83ef-3a75ade49831","type":"GlyphRenderer"},{"attributes":{},"id":"1bea4e54-a885-4225-a407-bfaf91b9902d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"bb9a3f0b-d487-483b-a644-d980c5f558bb","type":"Toolbar"},{"attributes":{"callback":null},"id":"212f77ff-7baa-480b-987d-8ff4ebe6c30a","type":"DataRange1d"},{"attributes":{"callback":null},"id":"08f987e7-a732-40bb-afda-c53ba47fd900","type":"DataRange1d"}],"root_ids":["8925c2bb-995c-4a35-938f-ca6ed84f427d"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"ccd1bfea-2935-4228-ba77-ed43c0efc343","elementid":"6c78ce98-22cd-4a93-b86a-90e7de7b8f11","modelid":"8925c2bb-995c-4a35-938f-ca6ed84f427d"}];
                
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
