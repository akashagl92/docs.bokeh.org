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
      };var element = document.getElementById("1f382bef-4158-4030-a15d-903b00ba30f7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1f382bef-4158-4030-a15d-903b00ba30f7' but no matching script tag was found. ")
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
                var docs_json = {"eab310e2-9532-4141-8d02-859397db50f1":{"roots":{"references":[{"attributes":{"data_source":{"id":"54ec6031-f837-4695-9aab-9ce33c639c32","type":"ColumnDataSource"},"glyph":{"id":"48d68744-0a92-4a0f-8972-1793e4c4702a","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"2f76e92d-3c9e-4b71-b6b1-7326054645aa","type":"CDSView"}},"id":"81bd0fa6-0507-45f5-bac8-1405141dbcb0","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"48d68744-0a92-4a0f-8972-1793e4c4702a","type":"Patch"},{"attributes":{},"id":"b5b5e9b2-e25d-4fa3-9c12-69ac95255588","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"54ec6031-f837-4695-9aab-9ce33c639c32","type":"ColumnDataSource"}},"id":"2f76e92d-3c9e-4b71-b6b1-7326054645aa","type":"CDSView"},{"attributes":{"below":[{"id":"4c987bfd-4372-4f57-9319-23214d0d876a","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"5ba824b8-fbfa-4bb6-9f20-3bddc6eb54d1","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"81bd0fa6-0507-45f5-bac8-1405141dbcb0","type":"GlyphRenderer"},{"id":"4c987bfd-4372-4f57-9319-23214d0d876a","type":"LinearAxis"},{"id":"5ba824b8-fbfa-4bb6-9f20-3bddc6eb54d1","type":"LinearAxis"},{"id":"e7cd4a4b-54f2-40ff-882a-32a0f4e88891","type":"Grid"},{"id":"021ed034-9546-4cf5-bc5e-cf362b342bae","type":"Grid"}],"title":null,"toolbar":{"id":"4e680d0d-10ca-4ed6-a7f0-4f0e7a8b58ce","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d0638f25-67f8-42c1-a19a-513e7b47716d","type":"DataRange1d"},"x_scale":{"id":"41f78d92-229b-40fd-977e-4000772be96b","type":"LinearScale"},"y_range":{"id":"c4044726-7ed1-447c-97e8-79d25ec5222b","type":"DataRange1d"},"y_scale":{"id":"90361028-cef9-4692-8883-c51a0122b42f","type":"LinearScale"}},"id":"f6b8a9bd-03b6-4ab2-83fc-49f05cb7190f","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"4e680d0d-10ca-4ed6-a7f0-4f0e7a8b58ce","type":"Toolbar"},{"attributes":{"callback":null},"id":"d0638f25-67f8-42c1-a19a-513e7b47716d","type":"DataRange1d"},{"attributes":{},"id":"e56f44e4-fc86-49ed-b851-c26892d5d048","type":"BasicTicker"},{"attributes":{"formatter":{"id":"b5b5e9b2-e25d-4fa3-9c12-69ac95255588","type":"BasicTickFormatter"},"plot":{"id":"f6b8a9bd-03b6-4ab2-83fc-49f05cb7190f","type":"Plot"},"ticker":{"id":"77ccf9c0-455b-4cfa-a96b-6cf8a427ac90","type":"BasicTicker"}},"id":"4c987bfd-4372-4f57-9319-23214d0d876a","type":"LinearAxis"},{"attributes":{"formatter":{"id":"41472fe2-8b09-4fa6-86f8-a28838c64bca","type":"BasicTickFormatter"},"plot":{"id":"f6b8a9bd-03b6-4ab2-83fc-49f05cb7190f","type":"Plot"},"ticker":{"id":"e56f44e4-fc86-49ed-b851-c26892d5d048","type":"BasicTicker"}},"id":"5ba824b8-fbfa-4bb6-9f20-3bddc6eb54d1","type":"LinearAxis"},{"attributes":{},"id":"77ccf9c0-455b-4cfa-a96b-6cf8a427ac90","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABAAAAAAAAAAECMsNzTCMv9PxphuacRlvs/qBGWexph+T80wnJPIyz3P8JyTyMs9/Q/UCMs9zTC8j/c0wjLPY3wP9QIyz2NsOw/8GmE5Z5G6D8Iyz2NsNzjP0hY7mmE5d4/eBphuacR1j9guacRlnvKP6B7GmG5p7E/oHsaYbmnsb9guacRlnvKv3waYbmnEda/SFjuaYTl3r8Iyz2NsNzjv+5phOWeRui/1AjLPY2w7L/d0wjLPY3wv1AjLPc0wvK/wnJPIyz39L81wnJPIyz3v6gRlnsaYfm/GmG5pxGW+7+NsNzTCMv9vwAAAAAAAADA","dtype":"float64","shape":[60]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBAZmZmZmZmIECkMMUdEx4eQMqiBv9PlhtAQCORcIM1GUACsmRyrfsWQBVPgQTO6BRAdvrmJuX8EkAktJXZ8jcRQEX4GjnuMw9A3qSc3+NFDEASbrCmxqUJQOVTVo6WUwdAVFaOllNPBUBhdVi//ZgDQAuxtAiVMAJAUQmjchkWAUA1fiP9ikkAQGsfbFDTlf8/pnu152o0/z8cESPA3G7/P+Zv2myUIgBA23M1mqfbAEBulCLop+IBQJ3RoVaVNwNAaCuz5W/aBEDSoVaVN8sGQNk0jGXsCQlAe+RTVo6WC0C8sK1nHXEOQM3MzMzMzBBA","dtype":"float64","shape":[60]}}},"id":"54ec6031-f837-4695-9aab-9ce33c639c32","type":"ColumnDataSource"},{"attributes":{},"id":"41f78d92-229b-40fd-977e-4000772be96b","type":"LinearScale"},{"attributes":{},"id":"41472fe2-8b09-4fa6-86f8-a28838c64bca","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"c4044726-7ed1-447c-97e8-79d25ec5222b","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"f6b8a9bd-03b6-4ab2-83fc-49f05cb7190f","type":"Plot"},"ticker":{"id":"e56f44e4-fc86-49ed-b851-c26892d5d048","type":"BasicTicker"}},"id":"021ed034-9546-4cf5-bc5e-cf362b342bae","type":"Grid"},{"attributes":{},"id":"90361028-cef9-4692-8883-c51a0122b42f","type":"LinearScale"},{"attributes":{"plot":{"id":"f6b8a9bd-03b6-4ab2-83fc-49f05cb7190f","type":"Plot"},"ticker":{"id":"77ccf9c0-455b-4cfa-a96b-6cf8a427ac90","type":"BasicTicker"}},"id":"e7cd4a4b-54f2-40ff-882a-32a0f4e88891","type":"Grid"}],"root_ids":["f6b8a9bd-03b6-4ab2-83fc-49f05cb7190f"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"eab310e2-9532-4141-8d02-859397db50f1","elementid":"1f382bef-4158-4030-a15d-903b00ba30f7","modelid":"f6b8a9bd-03b6-4ab2-83fc-49f05cb7190f"}];
                
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
