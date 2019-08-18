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
      };var element = document.getElementById("57881207-de6c-40f2-8b7e-5458a8dce102");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '57881207-de6c-40f2-8b7e-5458a8dce102' but no matching script tag was found. ")
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
                var docs_json = {"dd8639ee-0600-4347-b162-4abb077dca3c":{"roots":{"references":[{"attributes":{"source":{"id":"5ccbf1fc-254a-4662-a4b9-4133cfa151b3","type":"ColumnDataSource"}},"id":"8b9f8651-e16d-4128-b6cd-34f979cdb4b2","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"cde2b6a3-102e-4c5e-ab8d-32f798d211fc","type":"Title"},{"attributes":{},"id":"e52fe196-157d-4278-a5cf-d2ed1d60d56c","type":"BasicTicker"},{"attributes":{},"id":"ab309131-f6b6-48ba-82ef-877ed4e8767f","type":"SaveTool"},{"attributes":{},"id":"a8c83f44-1881-4e10-b5c0-68174345a046","type":"BasicTicker"},{"attributes":{"fill_alpha":{"field":"fill_alpha"},"fill_color":{"field":"fill_color"},"line_alpha":{"field":"line_alpha"},"line_color":{"field":"line_color"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"868cae21-d145-4d44-8b33-14113fddcb8e","type":"Patches"},{"attributes":{},"id":"9fe7fe82-a305-4045-aa3e-02bcced9db97","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"2f218824-3b7f-44d2-8539-7ebe093ca4c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8c83f44-1881-4e10-b5c0-68174345a046","type":"BasicTicker"}},"id":"f93354b3-1344-41d8-8255-8c318d266879","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"bbf1bf1c-5a2d-4113-b3a3-74f1e901e6b5","type":"BoxAnnotation"},{"attributes":{},"id":"fdd6fadf-b13f-4cdb-bd00-9ced769bc2e7","type":"PanTool"},{"attributes":{"data_source":{"id":"5ccbf1fc-254a-4662-a4b9-4133cfa151b3","type":"ColumnDataSource"},"glyph":{"id":"868cae21-d145-4d44-8b33-14113fddcb8e","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"bf944cb2-0a0d-40fe-af61-09cf76e33dd1","type":"Patches"},"selection_glyph":null,"view":{"id":"8b9f8651-e16d-4128-b6cd-34f979cdb4b2","type":"CDSView"}},"id":"88d8cb2d-b1b5-48d4-8439-ff7b4338f1f9","type":"GlyphRenderer"},{"attributes":{},"id":"daac5e03-d7ec-45af-9a2a-6b708a0fbcaa","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"bbf1bf1c-5a2d-4113-b3a3-74f1e901e6b5","type":"BoxAnnotation"}},"id":"61f9cb17-4ecf-4b5d-be13-5e76e41afaff","type":"BoxZoomTool"},{"attributes":{},"id":"04f6e235-9307-4cdd-8138-6e4397a698ae","type":"HelpTool"},{"attributes":{"callback":null},"id":"eed5f7f4-cbf8-4761-917c-aad87a3b7cf2","type":"DataRange1d"},{"attributes":{},"id":"34ca4f3b-09ee-474b-86be-a60f539bd69d","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"bf944cb2-0a0d-40fe-af61-09cf76e33dd1","type":"Patches"},{"attributes":{"formatter":{"id":"9fe7fe82-a305-4045-aa3e-02bcced9db97","type":"BasicTickFormatter"},"plot":{"id":"2f218824-3b7f-44d2-8539-7ebe093ca4c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"a8c83f44-1881-4e10-b5c0-68174345a046","type":"BasicTicker"}},"id":"a30602bd-1ec8-457d-abf0-c14ae05463f0","type":"LinearAxis"},{"attributes":{},"id":"7e3b84aa-49c5-464f-b642-51702f10216a","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"daac5e03-d7ec-45af-9a2a-6b708a0fbcaa","type":"BasicTickFormatter"},"plot":{"id":"2f218824-3b7f-44d2-8539-7ebe093ca4c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e52fe196-157d-4278-a5cf-d2ed1d60d56c","type":"BasicTicker"}},"id":"1bc00e1f-8a55-4a67-88d9-4f21bdaffd34","type":"LinearAxis"},{"attributes":{},"id":"7b1ad046-724b-4cf2-9652-fd019b60b76b","type":"LinearScale"},{"attributes":{"plot":{"id":"2f218824-3b7f-44d2-8539-7ebe093ca4c4","subtype":"Figure","type":"Plot"},"ticker":{"id":"e52fe196-157d-4278-a5cf-d2ed1d60d56c","type":"BasicTicker"}},"id":"3816c686-d0fc-4ec0-8e29-5bc0a84bb90c","type":"Grid"},{"attributes":{"callback":null,"column_names":["xs","ys","fill_color","line_color","fill_alpha","line_alpha"],"data":{"fill_alpha":[0.8,0.3],"fill_color":["firebrick","navy"],"line_alpha":[0.8,0.3],"line_color":["firebrick","navy"],"xs":[[1,3,2],[3,4,6,6]],"ys":[[2,1,4],[4,7,8,5]]}},"id":"5ccbf1fc-254a-4662-a4b9-4133cfa151b3","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"1bc00e1f-8a55-4a67-88d9-4f21bdaffd34","type":"LinearAxis"}],"left":[{"id":"a30602bd-1ec8-457d-abf0-c14ae05463f0","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"1bc00e1f-8a55-4a67-88d9-4f21bdaffd34","type":"LinearAxis"},{"id":"3816c686-d0fc-4ec0-8e29-5bc0a84bb90c","type":"Grid"},{"id":"a30602bd-1ec8-457d-abf0-c14ae05463f0","type":"LinearAxis"},{"id":"f93354b3-1344-41d8-8255-8c318d266879","type":"Grid"},{"id":"bbf1bf1c-5a2d-4113-b3a3-74f1e901e6b5","type":"BoxAnnotation"},{"id":"88d8cb2d-b1b5-48d4-8439-ff7b4338f1f9","type":"GlyphRenderer"}],"title":{"id":"cde2b6a3-102e-4c5e-ab8d-32f798d211fc","type":"Title"},"toolbar":{"id":"b4aa4ec8-3c9e-40cf-9f21-d13da96acfd9","type":"Toolbar"},"x_range":{"id":"d3eeecc6-7970-46eb-95fa-9d33fc05cdb5","type":"DataRange1d"},"x_scale":{"id":"7b1ad046-724b-4cf2-9652-fd019b60b76b","type":"LinearScale"},"y_range":{"id":"eed5f7f4-cbf8-4761-917c-aad87a3b7cf2","type":"DataRange1d"},"y_scale":{"id":"85f804f1-6815-48a6-92a3-a73207abcbc1","type":"LinearScale"}},"id":"2f218824-3b7f-44d2-8539-7ebe093ca4c4","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"fdd6fadf-b13f-4cdb-bd00-9ced769bc2e7","type":"PanTool"},{"id":"7e3b84aa-49c5-464f-b642-51702f10216a","type":"WheelZoomTool"},{"id":"61f9cb17-4ecf-4b5d-be13-5e76e41afaff","type":"BoxZoomTool"},{"id":"ab309131-f6b6-48ba-82ef-877ed4e8767f","type":"SaveTool"},{"id":"34ca4f3b-09ee-474b-86be-a60f539bd69d","type":"ResetTool"},{"id":"04f6e235-9307-4cdd-8138-6e4397a698ae","type":"HelpTool"}]},"id":"b4aa4ec8-3c9e-40cf-9f21-d13da96acfd9","type":"Toolbar"},{"attributes":{"callback":null},"id":"d3eeecc6-7970-46eb-95fa-9d33fc05cdb5","type":"DataRange1d"},{"attributes":{},"id":"85f804f1-6815-48a6-92a3-a73207abcbc1","type":"LinearScale"}],"root_ids":["2f218824-3b7f-44d2-8539-7ebe093ca4c4"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"dd8639ee-0600-4347-b162-4abb077dca3c","elementid":"57881207-de6c-40f2-8b7e-5458a8dce102","modelid":"2f218824-3b7f-44d2-8539-7ebe093ca4c4"}];
                
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
