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
      };var element = document.getElementById("d28c4341-95b1-4c77-aa40-9980c2503156");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd28c4341-95b1-4c77-aa40-9980c2503156' but no matching script tag was found. ")
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
                    var docs_json = {"7eab1398-e60e-46b1-bb7b-b80e7d6f42bf":{"roots":{"references":[{"attributes":{"formatter":{"id":"92c554dd-b80d-4b43-823a-0bf80478efb1","type":"BasicTickFormatter"},"plot":{"id":"f4b99da5-da93-4ea5-851d-c7ab3fffddfb","type":"Plot"},"ticker":{"id":"fe58f4af-7da3-4a6a-85ca-97754e1568d7","type":"BasicTicker"}},"id":"d8d4dc70-eef5-40ac-bb13-25e2a8f28226","type":"LinearAxis"},{"attributes":{},"id":"92c554dd-b80d-4b43-823a-0bf80478efb1","type":"BasicTickFormatter"},{"attributes":{},"id":"35f12d4e-78dc-48be-aeb3-6db959f2fff9","type":"BasicTicker"},{"attributes":{"data_source":{"id":"4f9dd08d-843c-4ae9-9715-f1b487382eb3","type":"ColumnDataSource"},"glyph":{"id":"c3f51739-2164-4d4c-a735-4921d5d3d007","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"6b8e980e-e728-4edf-b945-b5d60f151517","type":"CDSView"}},"id":"6d2a1742-d335-4872-8e08-6592caef1689","type":"GlyphRenderer"},{"attributes":{"source":{"id":"4f9dd08d-843c-4ae9-9715-f1b487382eb3","type":"ColumnDataSource"}},"id":"6b8e980e-e728-4edf-b945-b5d60f151517","type":"CDSView"},{"attributes":{"formatter":{"id":"73b4a425-b6a1-4268-8f55-bc4157cf79c3","type":"BasicTickFormatter"},"plot":{"id":"f4b99da5-da93-4ea5-851d-c7ab3fffddfb","type":"Plot"},"ticker":{"id":"35f12d4e-78dc-48be-aeb3-6db959f2fff9","type":"BasicTicker"}},"id":"f82f0963-1c4e-4ef4-896f-d06521f967cc","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"937985dd-6edc-4df2-88cc-b4e44d32da1e","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABAAAAAAAAAAECMsNzTCMv9PxphuacRlvs/qBGWexph+T80wnJPIyz3P8JyTyMs9/Q/UCMs9zTC8j/c0wjLPY3wP9QIyz2NsOw/8GmE5Z5G6D8Iyz2NsNzjP0hY7mmE5d4/eBphuacR1j9guacRlnvKP6B7GmG5p7E/oHsaYbmnsb9guacRlnvKv3waYbmnEda/SFjuaYTl3r8Iyz2NsNzjv+5phOWeRui/1AjLPY2w7L/d0wjLPY3wv1AjLPc0wvK/wnJPIyz39L81wnJPIyz3v6gRlnsaYfm/GmG5pxGW+7+NsNzTCMv9vwAAAAAAAADA","dtype":"float64","shape":[60]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBAZmZmZmZmIECkMMUdEx4eQMqiBv9PlhtAQCORcIM1GUACsmRyrfsWQBVPgQTO6BRAdvrmJuX8EkAktJXZ8jcRQEX4GjnuMw9A3qSc3+NFDEASbrCmxqUJQOVTVo6WUwdAVFaOllNPBUBhdVi//ZgDQAuxtAiVMAJAUQmjchkWAUA1fiP9ikkAQGsfbFDTlf8/pnu152o0/z8cESPA3G7/P+Zv2myUIgBA23M1mqfbAEBulCLop+IBQJ3RoVaVNwNAaCuz5W/aBEDSoVaVN8sGQNk0jGXsCQlAe+RTVo6WC0C8sK1nHXEOQM3MzMzMzBBA","dtype":"float64","shape":[60]}}},"id":"4f9dd08d-843c-4ae9-9715-f1b487382eb3","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d9ee2534-cdf5-49d2-9c22-c412e64792e1","type":"DataRange1d"},{"attributes":{"plot":{"id":"f4b99da5-da93-4ea5-851d-c7ab3fffddfb","type":"Plot"},"ticker":{"id":"35f12d4e-78dc-48be-aeb3-6db959f2fff9","type":"BasicTicker"}},"id":"73405062-88f5-40ff-96ca-6cfc08bc1cb2","type":"Grid"},{"attributes":{"callback":null},"id":"8b1d5262-243b-43e1-91e7-54aeb4fc4ca9","type":"DataRange1d"},{"attributes":{},"id":"73b4a425-b6a1-4268-8f55-bc4157cf79c3","type":"BasicTickFormatter"},{"attributes":{},"id":"9f32e3f2-3934-4ef5-8b3c-7d1835c17d7d","type":"LinearScale"},{"attributes":{},"id":"00749e6b-dcd8-4edd-8531-dad5e1bd05b6","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3f51739-2164-4d4c-a735-4921d5d3d007","type":"Patch"},{"attributes":{},"id":"fe58f4af-7da3-4a6a-85ca-97754e1568d7","type":"BasicTicker"},{"attributes":{"below":[{"id":"f82f0963-1c4e-4ef4-896f-d06521f967cc","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"d8d4dc70-eef5-40ac-bb13-25e2a8f28226","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"6d2a1742-d335-4872-8e08-6592caef1689","type":"GlyphRenderer"},{"id":"f82f0963-1c4e-4ef4-896f-d06521f967cc","type":"LinearAxis"},{"id":"d8d4dc70-eef5-40ac-bb13-25e2a8f28226","type":"LinearAxis"},{"id":"73405062-88f5-40ff-96ca-6cfc08bc1cb2","type":"Grid"},{"id":"8fe64d35-753d-4aa9-86eb-35b1a463936f","type":"Grid"}],"title":null,"toolbar":{"id":"937985dd-6edc-4df2-88cc-b4e44d32da1e","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d9ee2534-cdf5-49d2-9c22-c412e64792e1","type":"DataRange1d"},"x_scale":{"id":"9f32e3f2-3934-4ef5-8b3c-7d1835c17d7d","type":"LinearScale"},"y_range":{"id":"8b1d5262-243b-43e1-91e7-54aeb4fc4ca9","type":"DataRange1d"},"y_scale":{"id":"00749e6b-dcd8-4edd-8531-dad5e1bd05b6","type":"LinearScale"}},"id":"f4b99da5-da93-4ea5-851d-c7ab3fffddfb","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"f4b99da5-da93-4ea5-851d-c7ab3fffddfb","type":"Plot"},"ticker":{"id":"fe58f4af-7da3-4a6a-85ca-97754e1568d7","type":"BasicTicker"}},"id":"8fe64d35-753d-4aa9-86eb-35b1a463936f","type":"Grid"}],"root_ids":["f4b99da5-da93-4ea5-851d-c7ab3fffddfb"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"7eab1398-e60e-46b1-bb7b-b80e7d6f42bf","elementid":"d28c4341-95b1-4c77-aa40-9980c2503156","modelid":"f4b99da5-da93-4ea5-851d-c7ab3fffddfb"}];
                
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
