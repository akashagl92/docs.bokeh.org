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
      };var element = document.getElementById("c3fe7e59-c116-4aec-b992-b172ceee0d19");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c3fe7e59-c116-4aec-b992-b172ceee0d19' but no matching script tag was found. ")
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
                var docs_json = {"dad64420-90bc-4e1f-8425-dcd71fa417b9":{"roots":{"references":[{"attributes":{"source":{"id":"e74410d3-798a-4fbd-9bd6-017b93c45aa8","type":"ColumnDataSource"}},"id":"52ef3203-870b-479a-bc80-763de95d1435","type":"CDSView"},{"attributes":{"fill_color":{"value":"#b3de69"},"height":{"value":0.5},"right":{"field":"right"},"y":{"field":"y"}},"id":"490e8aed-5f23-448a-8abf-274560bf7514","type":"HBar"},{"attributes":{},"id":"69256962-7709-43a4-8147-371e2c658eb0","type":"BasicTicker"},{"attributes":{},"id":"6f802258-1fb0-4b42-a9a5-40a1e2912dc2","type":"LinearScale"},{"attributes":{"plot":{"id":"194976a7-3cfb-4687-bd95-6857b8a6c296","type":"Plot"},"ticker":{"id":"3e48fa76-56a4-4dc9-b82d-a4e9df133134","type":"BasicTicker"}},"id":"b736c253-285b-4e8b-9ed1-2755f6d6ff49","type":"Grid"},{"attributes":{"below":[{"id":"523c74a6-51a4-4304-8562-099ed23452a5","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"51ee297b-a257-490c-a240-5bd48b57ad71","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9d625c0c-d5e4-4ad0-90e1-109540c5607d","type":"GlyphRenderer"},{"id":"523c74a6-51a4-4304-8562-099ed23452a5","type":"LinearAxis"},{"id":"51ee297b-a257-490c-a240-5bd48b57ad71","type":"LinearAxis"},{"id":"b736c253-285b-4e8b-9ed1-2755f6d6ff49","type":"Grid"},{"id":"8198c7b9-e73b-4ebb-b14d-486ef3e7c7f2","type":"Grid"}],"title":null,"toolbar":{"id":"72aa82a5-724c-4088-9449-052abe3d29c2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"98492c9f-135d-4548-97c7-dcce5c5adbb4","type":"DataRange1d"},"x_scale":{"id":"ec951632-c271-414b-81e3-43a93bde9792","type":"LinearScale"},"y_range":{"id":"8fe5d219-225f-4759-8630-cd2628507095","type":"DataRange1d"},"y_scale":{"id":"6f802258-1fb0-4b42-a9a5-40a1e2912dc2","type":"LinearScale"}},"id":"194976a7-3cfb-4687-bd95-6857b8a6c296","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"194976a7-3cfb-4687-bd95-6857b8a6c296","type":"Plot"},"ticker":{"id":"69256962-7709-43a4-8147-371e2c658eb0","type":"BasicTicker"}},"id":"8198c7b9-e73b-4ebb-b14d-486ef3e7c7f2","type":"Grid"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]}}},"id":"e74410d3-798a-4fbd-9bd6-017b93c45aa8","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"063d5fd7-ac92-4f00-812d-64c12423ec73","type":"BasicTickFormatter"},"plot":{"id":"194976a7-3cfb-4687-bd95-6857b8a6c296","type":"Plot"},"ticker":{"id":"3e48fa76-56a4-4dc9-b82d-a4e9df133134","type":"BasicTicker"}},"id":"523c74a6-51a4-4304-8562-099ed23452a5","type":"LinearAxis"},{"attributes":{},"id":"cddab047-733a-4532-8639-7d205ccf98b8","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"8fe5d219-225f-4759-8630-cd2628507095","type":"DataRange1d"},{"attributes":{},"id":"063d5fd7-ac92-4f00-812d-64c12423ec73","type":"BasicTickFormatter"},{"attributes":{},"id":"3e48fa76-56a4-4dc9-b82d-a4e9df133134","type":"BasicTicker"},{"attributes":{"formatter":{"id":"cddab047-733a-4532-8639-7d205ccf98b8","type":"BasicTickFormatter"},"plot":{"id":"194976a7-3cfb-4687-bd95-6857b8a6c296","type":"Plot"},"ticker":{"id":"69256962-7709-43a4-8147-371e2c658eb0","type":"BasicTicker"}},"id":"51ee297b-a257-490c-a240-5bd48b57ad71","type":"LinearAxis"},{"attributes":{"callback":null},"id":"98492c9f-135d-4548-97c7-dcce5c5adbb4","type":"DataRange1d"},{"attributes":{"data_source":{"id":"e74410d3-798a-4fbd-9bd6-017b93c45aa8","type":"ColumnDataSource"},"glyph":{"id":"490e8aed-5f23-448a-8abf-274560bf7514","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"52ef3203-870b-479a-bc80-763de95d1435","type":"CDSView"}},"id":"9d625c0c-d5e4-4ad0-90e1-109540c5607d","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"72aa82a5-724c-4088-9449-052abe3d29c2","type":"Toolbar"},{"attributes":{},"id":"ec951632-c271-414b-81e3-43a93bde9792","type":"LinearScale"}],"root_ids":["194976a7-3cfb-4687-bd95-6857b8a6c296"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"dad64420-90bc-4e1f-8425-dcd71fa417b9","elementid":"c3fe7e59-c116-4aec-b992-b172ceee0d19","modelid":"194976a7-3cfb-4687-bd95-6857b8a6c296"}];
                
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
