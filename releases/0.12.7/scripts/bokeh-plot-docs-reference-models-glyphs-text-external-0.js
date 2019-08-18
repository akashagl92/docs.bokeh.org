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
      };var element = document.getElementById("8e43dba3-ddf8-4d01-b722-0fe5211ce592");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8e43dba3-ddf8-4d01-b722-0fe5211ce592' but no matching script tag was found. ")
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
                var docs_json = {"8a7cba8b-1585-48dd-a471-d4b6089a1bdd":{"roots":{"references":[{"attributes":{"callback":null},"id":"6624a012-2a32-43af-b147-cc628274b10f","type":"DataRange1d"},{"attributes":{"below":[{"id":"1166db5a-b8df-47f1-80bc-ce93a3ccb4ce","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"909e5a1f-6aaf-44ad-b61d-d7aa16ea6018","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"3c8018d0-6de3-4dfa-bcdb-6a67b170ff4c","type":"GlyphRenderer"},{"id":"1166db5a-b8df-47f1-80bc-ce93a3ccb4ce","type":"LinearAxis"},{"id":"909e5a1f-6aaf-44ad-b61d-d7aa16ea6018","type":"LinearAxis"},{"id":"7a2df420-4abe-40fd-b212-4b0bc31eb75d","type":"Grid"},{"id":"610e76fe-6c5b-4e09-a35a-5a1c9b39f248","type":"Grid"}],"title":null,"toolbar":{"id":"2f3253db-fc69-4b0c-8375-8176efa6480d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"3ea68bbf-1935-4b27-93ec-a0ec771ced4c","type":"DataRange1d"},"x_scale":{"id":"5c696af3-9eba-4f37-8edb-521cdceba679","type":"LinearScale"},"y_range":{"id":"6624a012-2a32-43af-b147-cc628274b10f","type":"DataRange1d"},"y_scale":{"id":"f18e06b3-a9f4-4c4b-97ba-c7b4f2079ae6","type":"LinearScale"}},"id":"b9d3064b-d219-44d4-8e71-9c0f9185724c","type":"Plot"},{"attributes":{"angle":{"units":"rad","value":0.3},"text_color":{"value":"#96deb3"},"x":{"field":"x"},"y":{"field":"y"}},"id":"725909a2-c6a3-4fe5-9850-5210810a91ec","type":"Text"},{"attributes":{},"id":"a9615e27-c0f5-45d0-ba03-3f95320c7cae","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a9615e27-c0f5-45d0-ba03-3f95320c7cae","type":"BasicTickFormatter"},"plot":{"id":"b9d3064b-d219-44d4-8e71-9c0f9185724c","type":"Plot"},"ticker":{"id":"34e486f7-f9be-4f1d-ab92-d1c53c044c28","type":"BasicTicker"}},"id":"1166db5a-b8df-47f1-80bc-ce93a3ccb4ce","type":"LinearAxis"},{"attributes":{},"id":"f18e06b3-a9f4-4c4b-97ba-c7b4f2079ae6","type":"LinearScale"},{"attributes":{"data_source":{"id":"85ee8f45-d810-4c76-8105-3c059e3485fc","type":"ColumnDataSource"},"glyph":{"id":"725909a2-c6a3-4fe5-9850-5210810a91ec","type":"Text"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"813aea0f-c9b6-44ec-a0cc-c60d95618302","type":"CDSView"}},"id":"3c8018d0-6de3-4dfa-bcdb-6a67b170ff4c","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b9d3064b-d219-44d4-8e71-9c0f9185724c","type":"Plot"},"ticker":{"id":"34e486f7-f9be-4f1d-ab92-d1c53c044c28","type":"BasicTicker"}},"id":"7a2df420-4abe-40fd-b212-4b0bc31eb75d","type":"Grid"},{"attributes":{},"id":"5c696af3-9eba-4f37-8edb-521cdceba679","type":"LinearScale"},{"attributes":{},"id":"34e486f7-f9be-4f1d-ab92-d1c53c044c28","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","text"],"data":{"text":["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"],"x":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"y":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"85ee8f45-d810-4c76-8105-3c059e3485fc","type":"ColumnDataSource"},{"attributes":{"source":{"id":"85ee8f45-d810-4c76-8105-3c059e3485fc","type":"ColumnDataSource"}},"id":"813aea0f-c9b6-44ec-a0cc-c60d95618302","type":"CDSView"},{"attributes":{},"id":"a8aa04e1-5c39-4720-bf31-3467e1ab0e56","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2f3253db-fc69-4b0c-8375-8176efa6480d","type":"Toolbar"},{"attributes":{"callback":null},"id":"3ea68bbf-1935-4b27-93ec-a0ec771ced4c","type":"DataRange1d"},{"attributes":{},"id":"73986d9e-7a7f-46de-973c-8dbfc6872f02","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"b9d3064b-d219-44d4-8e71-9c0f9185724c","type":"Plot"},"ticker":{"id":"a8aa04e1-5c39-4720-bf31-3467e1ab0e56","type":"BasicTicker"}},"id":"610e76fe-6c5b-4e09-a35a-5a1c9b39f248","type":"Grid"},{"attributes":{"formatter":{"id":"73986d9e-7a7f-46de-973c-8dbfc6872f02","type":"BasicTickFormatter"},"plot":{"id":"b9d3064b-d219-44d4-8e71-9c0f9185724c","type":"Plot"},"ticker":{"id":"a8aa04e1-5c39-4720-bf31-3467e1ab0e56","type":"BasicTicker"}},"id":"909e5a1f-6aaf-44ad-b61d-d7aa16ea6018","type":"LinearAxis"}],"root_ids":["b9d3064b-d219-44d4-8e71-9c0f9185724c"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"8a7cba8b-1585-48dd-a471-d4b6089a1bdd","elementid":"8e43dba3-ddf8-4d01-b722-0fe5211ce592","modelid":"b9d3064b-d219-44d4-8e71-9c0f9185724c"}];
                
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
