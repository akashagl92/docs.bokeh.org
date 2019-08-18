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
      };var element = document.getElementById("0e4a0016-957a-40fc-a458-ac02ba108ec7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0e4a0016-957a-40fc-a458-ac02ba108ec7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"97ab8796-953f-48d4-9818-8afcbed4b0c7":{"roots":{"references":[{"attributes":{"below":[{"id":"c49da36f-e896-4b52-ac3e-2b89cfa6b597","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"024ce453-cafb-4244-91b5-7d0c5e669a4e","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"02337a6d-b40b-4678-809a-fc8228dbb7fd","type":"GlyphRenderer"},{"id":"c49da36f-e896-4b52-ac3e-2b89cfa6b597","type":"LinearAxis"},{"id":"024ce453-cafb-4244-91b5-7d0c5e669a4e","type":"LinearAxis"},{"id":"dbf9180a-9e20-469a-8323-30e6d874fe01","type":"Grid"},{"id":"604597a0-815c-4a2f-9b24-468121436ca2","type":"Grid"}],"title":null,"toolbar":{"id":"925f143f-6237-4afa-8265-a43461e573f2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"7dd93069-54d3-4637-9a48-8edd3224cad9","type":"DataRange1d"},"x_scale":{"id":"a4fc3070-7cc7-47d8-a8bc-2353a40eb0df","type":"LinearScale"},"y_range":{"id":"875b0985-a2a9-4ca0-a524-e63a3c94688c","type":"DataRange1d"},"y_scale":{"id":"91864da8-4f5a-4a33-8491-aa23df5d24c2","type":"LinearScale"}},"id":"ee9b4ea6-fa0b-4869-a404-08a4dc09eed9","type":"Plot"},{"attributes":{"formatter":{"id":"b554df3a-7274-4f4b-a9d3-01001e384504","type":"BasicTickFormatter"},"plot":{"id":"ee9b4ea6-fa0b-4869-a404-08a4dc09eed9","type":"Plot"},"ticker":{"id":"570fab06-3a42-43fe-a833-5a5eba0b3153","type":"BasicTicker"}},"id":"c49da36f-e896-4b52-ac3e-2b89cfa6b597","type":"LinearAxis"},{"attributes":{},"id":"7c8d2b37-0330-4752-b15a-a3b4bb504f74","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"ee9b4ea6-fa0b-4869-a404-08a4dc09eed9","type":"Plot"},"ticker":{"id":"dcfc4d75-9758-4f85-9194-123ea22214c2","type":"BasicTicker"}},"id":"604597a0-815c-4a2f-9b24-468121436ca2","type":"Grid"},{"attributes":{},"id":"2cfe7ba6-53a0-45e1-a000-2d63d44c1a31","type":"UnionRenderers"},{"attributes":{},"id":"91b90744-208b-4f2e-a455-4f212a251519","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"91b90744-208b-4f2e-a455-4f212a251519","type":"BasicTickFormatter"},"plot":{"id":"ee9b4ea6-fa0b-4869-a404-08a4dc09eed9","type":"Plot"},"ticker":{"id":"dcfc4d75-9758-4f85-9194-123ea22214c2","type":"BasicTicker"}},"id":"024ce453-cafb-4244-91b5-7d0c5e669a4e","type":"LinearAxis"},{"attributes":{"source":{"id":"b5b579c7-c579-4a10-ad1d-b1a4d4a06c24","type":"ColumnDataSource"}},"id":"337dc67b-4126-458c-a2d4-882b5fc4a6f1","type":"CDSView"},{"attributes":{},"id":"b554df3a-7274-4f4b-a9d3-01001e384504","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"925f143f-6237-4afa-8265-a43461e573f2","type":"Toolbar"},{"attributes":{},"id":"91864da8-4f5a-4a33-8491-aa23df5d24c2","type":"LinearScale"},{"attributes":{},"id":"dcfc4d75-9758-4f85-9194-123ea22214c2","type":"BasicTicker"},{"attributes":{"data_source":{"id":"b5b579c7-c579-4a10-ad1d-b1a4d4a06c24","type":"ColumnDataSource"},"glyph":{"id":"17cca015-b710-43e9-958a-483b2c8de336","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"337dc67b-4126-458c-a2d4-882b5fc4a6f1","type":"CDSView"}},"id":"02337a6d-b40b-4678-809a-fc8228dbb7fd","type":"GlyphRenderer"},{"attributes":{},"id":"570fab06-3a42-43fe-a833-5a5eba0b3153","type":"BasicTicker"},{"attributes":{"callback":null},"id":"7dd93069-54d3-4637-9a48-8edd3224cad9","type":"DataRange1d"},{"attributes":{"plot":{"id":"ee9b4ea6-fa0b-4869-a404-08a4dc09eed9","type":"Plot"},"ticker":{"id":"570fab06-3a42-43fe-a833-5a5eba0b3153","type":"BasicTicker"}},"id":"dbf9180a-9e20-469a-8323-30e6d874fe01","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABAAAAAAAAAAECMsNzTCMv9PxphuacRlvs/qBGWexph+T80wnJPIyz3P8JyTyMs9/Q/UCMs9zTC8j/c0wjLPY3wP9QIyz2NsOw/8GmE5Z5G6D8Iyz2NsNzjP0hY7mmE5d4/eBphuacR1j9guacRlnvKP6B7GmG5p7E/oHsaYbmnsb9guacRlnvKv3waYbmnEda/SFjuaYTl3r8Iyz2NsNzjv+5phOWeRui/1AjLPY2w7L/d0wjLPY3wv1AjLPc0wvK/wnJPIyz39L81wnJPIyz3v6gRlnsaYfm/GmG5pxGW+7+NsNzTCMv9vwAAAAAAAADA","dtype":"float64","shape":[60]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBAZmZmZmZmIECkMMUdEx4eQMqiBv9PlhtAQCORcIM1GUACsmRyrfsWQBVPgQTO6BRAdvrmJuX8EkAktJXZ8jcRQEX4GjnuMw9A3qSc3+NFDEASbrCmxqUJQOVTVo6WUwdAVFaOllNPBUBhdVi//ZgDQAuxtAiVMAJAUQmjchkWAUA1fiP9ikkAQGsfbFDTlf8/pnu152o0/z8cESPA3G7/P+Zv2myUIgBA23M1mqfbAEBulCLop+IBQJ3RoVaVNwNAaCuz5W/aBEDSoVaVN8sGQNk0jGXsCQlAe+RTVo6WC0C8sK1nHXEOQM3MzMzMzBBA","dtype":"float64","shape":[60]}},"selected":{"id":"7c8d2b37-0330-4752-b15a-a3b4bb504f74","type":"Selection"},"selection_policy":{"id":"2cfe7ba6-53a0-45e1-a000-2d63d44c1a31","type":"UnionRenderers"}},"id":"b5b579c7-c579-4a10-ad1d-b1a4d4a06c24","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"875b0985-a2a9-4ca0-a524-e63a3c94688c","type":"DataRange1d"},{"attributes":{"fill_color":"#a6cee3","x":{"field":"x"},"y":{"field":"y"}},"id":"17cca015-b710-43e9-958a-483b2c8de336","type":"Patch"},{"attributes":{},"id":"a4fc3070-7cc7-47d8-a8bc-2353a40eb0df","type":"LinearScale"}],"root_ids":["ee9b4ea6-fa0b-4869-a404-08a4dc09eed9"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"97ab8796-953f-48d4-9818-8afcbed4b0c7","roots":{"ee9b4ea6-fa0b-4869-a404-08a4dc09eed9":"0e4a0016-957a-40fc-a458-ac02ba108ec7"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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