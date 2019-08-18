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
      };var element = document.getElementById("42d49cc3-a6a7-4902-b255-660c3eee915d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '42d49cc3-a6a7-4902-b255-660c3eee915d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"bddd1010-d6f1-426e-8ac3-7e15b91d8667":{"roots":{"references":[{"attributes":{},"id":"2013e34f-6286-4173-a621-b57acf0da899","type":"BasicTicker"},{"attributes":{},"id":"5ca9fa95-16c2-4a63-a1bc-def1caba4eac","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"7777d592-4530-4bd0-9855-372323fb7a60","type":"Title"},{"attributes":{},"id":"07a5a511-c78f-4e6c-b425-37ecc8770ac0","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"71bd24fd-ef9d-413d-a2bc-e962f68f3d79","type":"BasicTickFormatter"},"plot":{"id":"db9ae972-a247-44c5-941b-ebd9ae401535","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5bc9356-0300-47eb-9fe8-b43372ac38e5","type":"BasicTicker"}},"id":"85655bcd-e58b-4c62-a926-991b22657f8c","type":"LinearAxis"},{"attributes":{},"id":"f5d9eccc-ecb5-4295-9fab-f7107d9fba96","type":"PanTool"},{"attributes":{"overlay":{"id":"e8d306c0-0841-43c3-b6ff-06280b6d00e3","type":"BoxAnnotation"}},"id":"0f811e95-f2d3-42a7-867e-600f493e7fbe","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"e8d306c0-0841-43c3-b6ff-06280b6d00e3","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"baf87eea-2e93-42d4-b9a8-a696fc89e4e9","type":"Circle"},{"attributes":{"source":{"id":"163d0fe8-c2fd-44f5-8003-904bebb74a73","type":"ColumnDataSource"}},"id":"7b029904-4155-4c2d-828e-972fc1a9ee30","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"219fe871-1617-4a5f-8ef7-73238343085c","type":"Circle"},{"attributes":{},"id":"c5bc9356-0300-47eb-9fe8-b43372ac38e5","type":"BasicTicker"},{"attributes":{},"id":"97ac4706-127c-4673-8100-39c71f14bb30","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"db9ae972-a247-44c5-941b-ebd9ae401535","subtype":"Figure","type":"Plot"},"ticker":{"id":"c5bc9356-0300-47eb-9fe8-b43372ac38e5","type":"BasicTicker"}},"id":"6fe14dad-ff48-411e-aff9-abbfe72c49f6","type":"Grid"},{"attributes":{"callback":null,"end":15},"id":"76b1b2da-f6f3-4e2c-8b75-89963da0c6d8","type":"Range1d"},{"attributes":{},"id":"8b8bdba7-4dfb-4a70-9d22-d32cd57a7209","type":"ResetTool"},{"attributes":{"below":[{"id":"b624ff90-63c6-4def-a617-4d73936fc2ca","type":"LinearAxis"}],"left":[{"id":"85655bcd-e58b-4c62-a926-991b22657f8c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"b624ff90-63c6-4def-a617-4d73936fc2ca","type":"LinearAxis"},{"id":"bcd65a80-8e56-4772-b907-6ca762d2f548","type":"Grid"},{"id":"85655bcd-e58b-4c62-a926-991b22657f8c","type":"LinearAxis"},{"id":"6fe14dad-ff48-411e-aff9-abbfe72c49f6","type":"Grid"},{"id":"e8d306c0-0841-43c3-b6ff-06280b6d00e3","type":"BoxAnnotation"},{"id":"18898ac9-68d4-48e5-8af4-e4e9e5a8caec","type":"GlyphRenderer"}],"title":{"id":"7777d592-4530-4bd0-9855-372323fb7a60","type":"Title"},"toolbar":{"id":"1ebdf9c8-680a-42ec-8982-eda44896f6d8","type":"Toolbar"},"x_range":{"id":"5e966a9b-ce68-40af-a642-0940ca3db519","type":"Range1d"},"x_scale":{"id":"2c471162-6407-4ffd-bc1c-f0415a91dbcd","type":"LinearScale"},"y_range":{"id":"76b1b2da-f6f3-4e2c-8b75-89963da0c6d8","type":"Range1d"},"y_scale":{"id":"6a9812fe-4194-4c61-b240-f5f3e8a5ead5","type":"LinearScale"}},"id":"db9ae972-a247-44c5-941b-ebd9ae401535","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"163d0fe8-c2fd-44f5-8003-904bebb74a73","type":"ColumnDataSource"},"glyph":{"id":"baf87eea-2e93-42d4-b9a8-a696fc89e4e9","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"219fe871-1617-4a5f-8ef7-73238343085c","type":"Circle"},"selection_glyph":null,"view":{"id":"7b029904-4155-4c2d-828e-972fc1a9ee30","type":"CDSView"}},"id":"18898ac9-68d4-48e5-8af4-e4e9e5a8caec","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f5d9eccc-ecb5-4295-9fab-f7107d9fba96","type":"PanTool"},{"id":"07a5a511-c78f-4e6c-b425-37ecc8770ac0","type":"WheelZoomTool"},{"id":"0f811e95-f2d3-42a7-867e-600f493e7fbe","type":"BoxZoomTool"},{"id":"97ac4706-127c-4673-8100-39c71f14bb30","type":"SaveTool"},{"id":"8b8bdba7-4dfb-4a70-9d22-d32cd57a7209","type":"ResetTool"},{"id":"2335532a-f17b-4c3a-8913-282a15cd1ced","type":"HelpTool"}]},"id":"1ebdf9c8-680a-42ec-8982-eda44896f6d8","type":"Toolbar"},{"attributes":{"callback":null,"end":20},"id":"5e966a9b-ce68-40af-a642-0940ca3db519","type":"Range1d"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"163d0fe8-c2fd-44f5-8003-904bebb74a73","type":"ColumnDataSource"},{"attributes":{},"id":"2335532a-f17b-4c3a-8913-282a15cd1ced","type":"HelpTool"},{"attributes":{},"id":"71bd24fd-ef9d-413d-a2bc-e962f68f3d79","type":"BasicTickFormatter"},{"attributes":{},"id":"2c471162-6407-4ffd-bc1c-f0415a91dbcd","type":"LinearScale"},{"attributes":{},"id":"6a9812fe-4194-4c61-b240-f5f3e8a5ead5","type":"LinearScale"},{"attributes":{"formatter":{"id":"5ca9fa95-16c2-4a63-a1bc-def1caba4eac","type":"BasicTickFormatter"},"plot":{"id":"db9ae972-a247-44c5-941b-ebd9ae401535","subtype":"Figure","type":"Plot"},"ticker":{"id":"2013e34f-6286-4173-a621-b57acf0da899","type":"BasicTicker"}},"id":"b624ff90-63c6-4def-a617-4d73936fc2ca","type":"LinearAxis"},{"attributes":{"plot":{"id":"db9ae972-a247-44c5-941b-ebd9ae401535","subtype":"Figure","type":"Plot"},"ticker":{"id":"2013e34f-6286-4173-a621-b57acf0da899","type":"BasicTicker"}},"id":"bcd65a80-8e56-4772-b907-6ca762d2f548","type":"Grid"}],"root_ids":["db9ae972-a247-44c5-941b-ebd9ae401535"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"bddd1010-d6f1-426e-8ac3-7e15b91d8667","elementid":"42d49cc3-a6a7-4902-b255-660c3eee915d","modelid":"db9ae972-a247-44c5-941b-ebd9ae401535"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
