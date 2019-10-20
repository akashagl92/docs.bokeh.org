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
      };var element = document.getElementById("8e98df31-5c21-436e-a175-830a373830a4");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8e98df31-5c21-436e-a175-830a373830a4' but no matching script tag was found. ")
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
                var docs_json = {"efa86837-131a-437f-8149-5cb5a28ec217":{"roots":{"references":[{"attributes":{"below":[{"id":"d8663989-d641-430c-afc4-02c3ae900fd5","type":"LinearAxis"}],"left":[{"id":"0f7f7553-a415-4c94-adf0-98ee8f9fd162","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"d8663989-d641-430c-afc4-02c3ae900fd5","type":"LinearAxis"},{"id":"2b8b9741-fb5b-4e5d-8053-fa48c84743fb","type":"Grid"},{"id":"0f7f7553-a415-4c94-adf0-98ee8f9fd162","type":"LinearAxis"},{"id":"7209c91a-2838-4300-8bb2-dae43a62a426","type":"Grid"},{"id":"a0c8bb53-cb7a-423a-9e17-adc275389aa7","type":"GlyphRenderer"}],"title":{"id":"b97d0a73-c092-42c5-8c9a-ed82d0310c1d","type":"Title"},"toolbar":{"id":"b25079cb-0830-4ca3-84b5-7bb81be2a220","type":"Toolbar"},"x_range":{"id":"4abec1f6-ac6c-4520-9ba2-339250800d31","type":"DataRange1d"},"x_scale":{"id":"8c1eceeb-0d71-4308-b9b7-0fdb030f5e7f","type":"LinearScale"},"y_range":{"id":"fbc1fc6b-a80f-443b-97f1-ece8e97f281c","type":"DataRange1d"},"y_scale":{"id":"fb7e7103-94fe-43a1-bfe3-41018ae7061a","type":"LinearScale"}},"id":"1e14a8ac-e4f5-44df-970c-6ce257b80849","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"1ff2685c-dfd8-4f38-8cfb-8715d32c5f35","type":"BasicTickFormatter"},"plot":{"id":"1e14a8ac-e4f5-44df-970c-6ce257b80849","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a8cbdb2-377d-4edb-9162-f936bf37682e","type":"BasicTicker"}},"id":"0f7f7553-a415-4c94-adf0-98ee8f9fd162","type":"LinearAxis"},{"attributes":{},"id":"fb7e7103-94fe-43a1-bfe3-41018ae7061a","type":"LinearScale"},{"attributes":{},"id":"2a8cbdb2-377d-4edb-9162-f936bf37682e","type":"BasicTicker"},{"attributes":{"plot":{"id":"1e14a8ac-e4f5-44df-970c-6ce257b80849","subtype":"Figure","type":"Plot"},"ticker":{"id":"d63891da-addd-4f0a-958d-a44fc99efa98","type":"BasicTicker"}},"id":"2b8b9741-fb5b-4e5d-8053-fa48c84743fb","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"1e14a8ac-e4f5-44df-970c-6ce257b80849","subtype":"Figure","type":"Plot"},"ticker":{"id":"2a8cbdb2-377d-4edb-9162-f936bf37682e","type":"BasicTicker"}},"id":"7209c91a-2838-4300-8bb2-dae43a62a426","type":"Grid"},{"attributes":{},"id":"1ff2685c-dfd8-4f38-8cfb-8715d32c5f35","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1aa18114-c71c-455c-b018-fac0503284b9","type":"BasicTickFormatter"},"plot":{"id":"1e14a8ac-e4f5-44df-970c-6ce257b80849","subtype":"Figure","type":"Plot"},"ticker":{"id":"d63891da-addd-4f0a-958d-a44fc99efa98","type":"BasicTicker"}},"id":"d8663989-d641-430c-afc4-02c3ae900fd5","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"firebrick"},"line_color":{"value":null}},"id":"cccbcb77-caae-4f4e-a38a-38c56563b60b","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"b5c19a8c-734e-4490-93d0-8cb9b36089be","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"b5c19a8c-734e-4490-93d0-8cb9b36089be","type":"ColumnDataSource"},"glyph":{"id":"eb9a4318-cd61-4034-9ae7-8d9b90da8bef","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"81d50893-e768-4d3b-8b48-876a1f19738d","type":"Circle"},"selection_glyph":{"id":"cccbcb77-caae-4f4e-a38a-38c56563b60b","type":"Circle"},"view":{"id":"5ef76fdf-4afd-48d8-aa3a-c552d693d961","type":"CDSView"}},"id":"a0c8bb53-cb7a-423a-9e17-adc275389aa7","type":"GlyphRenderer"},{"attributes":{},"id":"1aa18114-c71c-455c-b018-fac0503284b9","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"b5c19a8c-734e-4490-93d0-8cb9b36089be","type":"ColumnDataSource"}},"id":"5ef76fdf-4afd-48d8-aa3a-c552d693d961","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ab0039af-3ad7-4fd9-a832-6e7fd6a92699","type":"TapTool"}]},"id":"b25079cb-0830-4ca3-84b5-7bb81be2a220","type":"Toolbar"},{"attributes":{},"id":"d63891da-addd-4f0a-958d-a44fc99efa98","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"line_color":{"value":"firebrick"}},"id":"81d50893-e768-4d3b-8b48-876a1f19738d","type":"Circle"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":50},"x":{"field":"x"},"y":{"field":"y"}},"id":"eb9a4318-cd61-4034-9ae7-8d9b90da8bef","type":"Circle"},{"attributes":{"plot":null,"text":"Select a circle"},"id":"b97d0a73-c092-42c5-8c9a-ed82d0310c1d","type":"Title"},{"attributes":{"callback":null},"id":"4abec1f6-ac6c-4520-9ba2-339250800d31","type":"DataRange1d"},{"attributes":{"callback":null},"id":"fbc1fc6b-a80f-443b-97f1-ece8e97f281c","type":"DataRange1d"},{"attributes":{"callback":null},"id":"ab0039af-3ad7-4fd9-a832-6e7fd6a92699","type":"TapTool"},{"attributes":{},"id":"8c1eceeb-0d71-4308-b9b7-0fdb030f5e7f","type":"LinearScale"}],"root_ids":["1e14a8ac-e4f5-44df-970c-6ce257b80849"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"efa86837-131a-437f-8149-5cb5a28ec217","elementid":"8e98df31-5c21-436e-a175-830a373830a4","modelid":"1e14a8ac-e4f5-44df-970c-6ce257b80849"}];
                
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
