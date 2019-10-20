(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("43962295-dddf-476a-87e8-6569dfe996f7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '43962295-dddf-476a-87e8-6569dfe996f7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"0fd63c01-61c0-4e8a-83c0-6a13389ee7a6":{"roots":{"references":[{"attributes":{},"id":"0aa33fd2-f02e-47f5-b45e-4018285aaa5d","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABAAAAAAAAAAECMsNzTCMv9PxphuacRlvs/qBGWexph+T80wnJPIyz3P8JyTyMs9/Q/UCMs9zTC8j/c0wjLPY3wP9QIyz2NsOw/8GmE5Z5G6D8Iyz2NsNzjP0hY7mmE5d4/eBphuacR1j9guacRlnvKP6B7GmG5p7E/oHsaYbmnsb9guacRlnvKv3waYbmnEda/SFjuaYTl3r8Iyz2NsNzjv+5phOWeRui/1AjLPY2w7L/d0wjLPY3wv1AjLPc0wvK/wnJPIyz39L81wnJPIyz3v6gRlnsaYfm/GmG5pxGW+7+NsNzTCMv9vwAAAAAAAADA","dtype":"float64","shape":[60]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBAZmZmZmZmIECkMMUdEx4eQMqiBv9PlhtAQCORcIM1GUACsmRyrfsWQBVPgQTO6BRAdvrmJuX8EkAktJXZ8jcRQEX4GjnuMw9A3qSc3+NFDEASbrCmxqUJQOVTVo6WUwdAVFaOllNPBUBhdVi//ZgDQAuxtAiVMAJAUQmjchkWAUA1fiP9ikkAQGsfbFDTlf8/pnu152o0/z8cESPA3G7/P+Zv2myUIgBA23M1mqfbAEBulCLop+IBQJ3RoVaVNwNAaCuz5W/aBEDSoVaVN8sGQNk0jGXsCQlAe+RTVo6WC0C8sK1nHXEOQM3MzMzMzBBA","dtype":"float64","shape":[60]}}},"id":"8f993911-dfef-454d-9a32-c935f6e87055","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9f590ad9-8562-4a3c-8fbd-ee479ab4d9f2","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#a6cee3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"920913c0-d199-4258-8c47-336a7625e092","type":"Patch"},{"attributes":{"dimension":1,"plot":{"id":"ef928133-abc8-4025-ad89-4df124f23fd3","type":"Plot"},"ticker":{"id":"dc6f3afe-d3a7-4b30-95f0-02e4f56d80d7","type":"BasicTicker"}},"id":"8e1d7c42-ce7f-45f6-a5ac-ba277be484fe","type":"Grid"},{"attributes":{"callback":null},"id":"1801373b-6095-4167-a717-c6192a2ce3ff","type":"DataRange1d"},{"attributes":{},"id":"007e0f3b-a058-4c91-80d1-18a4d7c84a36","type":"ToolEvents"},{"attributes":{},"id":"ea6ac63a-d00e-4338-8180-fccd4d65a93f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"fa8a7477-b019-4ff1-99a6-0c585050e185","type":"BasicTickFormatter"},"plot":{"id":"ef928133-abc8-4025-ad89-4df124f23fd3","type":"Plot"},"ticker":{"id":"dc6f3afe-d3a7-4b30-95f0-02e4f56d80d7","type":"BasicTicker"}},"id":"c5798843-a107-4341-bb16-4ec22a9b4898","type":"LinearAxis"},{"attributes":{},"id":"5976cc10-d3b6-4bc7-82d6-e32f5f45c4e1","type":"LinearScale"},{"attributes":{},"id":"fa8a7477-b019-4ff1-99a6-0c585050e185","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"0c67d0bc-0e70-42ed-85d4-114998d00f13","type":"DataRange1d"},{"attributes":{},"id":"dc6f3afe-d3a7-4b30-95f0-02e4f56d80d7","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8f993911-dfef-454d-9a32-c935f6e87055","type":"ColumnDataSource"},"glyph":{"id":"920913c0-d199-4258-8c47-336a7625e092","type":"Patch"},"hover_glyph":null,"muted_glyph":null},"id":"9f829e91-4beb-4d0b-95a2-32124aba66b0","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"b163dd34-7aad-4d7e-8dcc-41954966a516","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"c5798843-a107-4341-bb16-4ec22a9b4898","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9f829e91-4beb-4d0b-95a2-32124aba66b0","type":"GlyphRenderer"},{"id":"b163dd34-7aad-4d7e-8dcc-41954966a516","type":"LinearAxis"},{"id":"c5798843-a107-4341-bb16-4ec22a9b4898","type":"LinearAxis"},{"id":"540dfcc5-670a-4e22-ae0b-c7cba0470951","type":"Grid"},{"id":"8e1d7c42-ce7f-45f6-a5ac-ba277be484fe","type":"Grid"}],"title":null,"tool_events":{"id":"007e0f3b-a058-4c91-80d1-18a4d7c84a36","type":"ToolEvents"},"toolbar":{"id":"9f590ad9-8562-4a3c-8fbd-ee479ab4d9f2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0c67d0bc-0e70-42ed-85d4-114998d00f13","type":"DataRange1d"},"x_scale":{"id":"6ea3b8ea-ddc5-4116-b6f1-0f9af37ab301","type":"LinearScale"},"y_range":{"id":"1801373b-6095-4167-a717-c6192a2ce3ff","type":"DataRange1d"},"y_scale":{"id":"5976cc10-d3b6-4bc7-82d6-e32f5f45c4e1","type":"LinearScale"}},"id":"ef928133-abc8-4025-ad89-4df124f23fd3","type":"Plot"},{"attributes":{},"id":"6ea3b8ea-ddc5-4116-b6f1-0f9af37ab301","type":"LinearScale"},{"attributes":{"formatter":{"id":"ea6ac63a-d00e-4338-8180-fccd4d65a93f","type":"BasicTickFormatter"},"plot":{"id":"ef928133-abc8-4025-ad89-4df124f23fd3","type":"Plot"},"ticker":{"id":"0aa33fd2-f02e-47f5-b45e-4018285aaa5d","type":"BasicTicker"}},"id":"b163dd34-7aad-4d7e-8dcc-41954966a516","type":"LinearAxis"},{"attributes":{"plot":{"id":"ef928133-abc8-4025-ad89-4df124f23fd3","type":"Plot"},"ticker":{"id":"0aa33fd2-f02e-47f5-b45e-4018285aaa5d","type":"BasicTicker"}},"id":"540dfcc5-670a-4e22-ae0b-c7cba0470951","type":"Grid"}],"root_ids":["ef928133-abc8-4025-ad89-4df124f23fd3"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"0fd63c01-61c0-4e8a-83c0-6a13389ee7a6","elementid":"43962295-dddf-476a-87e8-6569dfe996f7","modelid":"ef928133-abc8-4025-ad89-4df124f23fd3"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
