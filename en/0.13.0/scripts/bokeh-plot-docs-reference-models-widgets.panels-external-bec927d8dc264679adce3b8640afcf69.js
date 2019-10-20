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
      };var element = document.getElementById("eb4e011b-8cb5-404d-ac0c-50876898bf29");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb4e011b-8cb5-404d-ac0c-50876898bf29' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"4580dff6-e824-4cb9-b491-ee435ffa2c18":{"roots":{"references":[{"attributes":{},"id":"9f84711b-f3b8-4c3c-8c20-13bdf291deaf","type":"LinearScale"},{"attributes":{"overlay":{"id":"c6c32dc9-2e21-4e63-921f-565de448a4c0","type":"BoxAnnotation"}},"id":"a881c1c8-cb51-44ac-b358-8cb526b0d8a3","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"9847b101-08d9-4a93-870a-2b83b2e8abe0","type":"Title"},{"attributes":{"formatter":{"id":"32bf3c89-ce6e-4409-ad19-100804ad4cb1","type":"BasicTickFormatter"},"plot":{"id":"63ef5308-c098-4093-9722-95dbc75cbb92","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b6be118-6256-44a0-af80-e55ac20e8f26","type":"BasicTicker"}},"id":"76b8b5d7-f874-4646-b435-df642fc971cd","type":"LinearAxis"},{"attributes":{},"id":"5e20974d-7339-4fcc-a4f0-10e9fce05449","type":"HelpTool"},{"attributes":{},"id":"32bf3c89-ce6e-4409-ad19-100804ad4cb1","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.5,"line_color":"navy","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"fb23ad96-f90f-4a40-8f88-8a10e19043ce","type":"Line"},{"attributes":{},"id":"bb3393ca-7aea-4b0a-ab93-0a15eaae9e6c","type":"ResetTool"},{"attributes":{},"id":"0339b14c-dd40-4180-98dc-54992d7e3f25","type":"WheelZoomTool"},{"attributes":{},"id":"e8703bd4-530b-43e4-9067-178d354ff73d","type":"BasicTicker"},{"attributes":{"formatter":{"id":"4691d68a-a592-4d96-a702-99679faf3122","type":"BasicTickFormatter"},"plot":{"id":"63ef5308-c098-4093-9722-95dbc75cbb92","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8703bd4-530b-43e4-9067-178d354ff73d","type":"BasicTicker"}},"id":"21ad66bd-87af-48b6-baf4-bc84522b50e0","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"e2caa1e3-3687-4e6b-be05-aeccac48ee11","type":"PanTool"},{"id":"890780ee-00fa-416d-afc8-babc93d3a119","type":"WheelZoomTool"},{"id":"a881c1c8-cb51-44ac-b358-8cb526b0d8a3","type":"BoxZoomTool"},{"id":"94c90ae1-918c-4819-8d89-64eb1d6f3283","type":"SaveTool"},{"id":"bb3393ca-7aea-4b0a-ab93-0a15eaae9e6c","type":"ResetTool"},{"id":"5e20974d-7339-4fcc-a4f0-10e9fce05449","type":"HelpTool"}]},"id":"9ac47639-2253-4128-9908-a05eef37a3a4","type":"Toolbar"},{"attributes":{},"id":"c3f1c28f-e9bf-4acd-b047-367c56a6dd20","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"6e12a07c-b289-4f09-bf5c-0b6056fbb8b4","type":"Title"},{"attributes":{"formatter":{"id":"080bc2ee-f2d3-4142-8af0-ec02bf9bdd1c","type":"BasicTickFormatter"},"plot":{"id":"a2d5ea58-c548-435f-9c16-4b28c3516b41","subtype":"Figure","type":"Plot"},"ticker":{"id":"e880b502-88a7-4826-bcec-df571a36dbdb","type":"BasicTicker"}},"id":"31c37dcd-1650-49cd-a04d-daae83b486d4","type":"LinearAxis"},{"attributes":{"callback":null,"tabs":[{"id":"72f70b47-006f-49f8-be1f-2c03bbe23146","type":"Panel"},{"id":"feeaa7a6-08e1-46d4-bd91-87eca10ad611","type":"Panel"}]},"id":"440158de-c196-4375-a8d9-51bce499ffc4","type":"Tabs"},{"attributes":{"callback":null},"id":"d52247f5-3a68-440c-bbaa-c2b4c7b772ff","type":"DataRange1d"},{"attributes":{"callback":null},"id":"cf8e2bc5-76f4-445e-a30c-ba2c13308ec0","type":"DataRange1d"},{"attributes":{},"id":"a33af62d-ea53-4eb7-bc5f-2e9a04c982f1","type":"SaveTool"},{"attributes":{},"id":"cd4e4be9-3699-43e9-af21-c050e3044b34","type":"Selection"},{"attributes":{"formatter":{"id":"6e6a1d7d-91b7-4115-85a6-2df5873cdb2d","type":"BasicTickFormatter"},"plot":{"id":"a2d5ea58-c548-435f-9c16-4b28c3516b41","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3f1c28f-e9bf-4acd-b047-367c56a6dd20","type":"BasicTicker"}},"id":"a9795abd-e60e-41b3-8f7a-375f5d3fda26","type":"LinearAxis"},{"attributes":{},"id":"99490ae9-3eab-4418-9161-1411e2325e3d","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"navy"},"line_alpha":{"value":0.5},"line_color":{"value":"navy"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"e31ce220-163f-492e-af32-e2422944aaf2","type":"Circle"},{"attributes":{},"id":"171c9f2b-a3ae-4e3c-af80-4677cf3627c9","type":"LinearScale"},{"attributes":{},"id":"1404e0b9-52cc-40ef-9b4e-e4c099c20631","type":"Selection"},{"attributes":{"below":[{"id":"21ad66bd-87af-48b6-baf4-bc84522b50e0","type":"LinearAxis"}],"left":[{"id":"76b8b5d7-f874-4646-b435-df642fc971cd","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"21ad66bd-87af-48b6-baf4-bc84522b50e0","type":"LinearAxis"},{"id":"eb16e9c9-87b6-4f52-b31b-363fa0e7a7e7","type":"Grid"},{"id":"76b8b5d7-f874-4646-b435-df642fc971cd","type":"LinearAxis"},{"id":"a908995e-55e9-469f-a9a2-9641743be098","type":"Grid"},{"id":"c6c32dc9-2e21-4e63-921f-565de448a4c0","type":"BoxAnnotation"},{"id":"3e2df0c7-fcc4-420c-a1c6-5098f23657da","type":"GlyphRenderer"}],"title":{"id":"9847b101-08d9-4a93-870a-2b83b2e8abe0","type":"Title"},"toolbar":{"id":"9ac47639-2253-4128-9908-a05eef37a3a4","type":"Toolbar"},"x_range":{"id":"0a56a5cf-82d7-421e-922e-98095afa39c8","type":"DataRange1d"},"x_scale":{"id":"7874da55-6a90-4081-ba55-87a82aefe945","type":"LinearScale"},"y_range":{"id":"cf8e2bc5-76f4-445e-a30c-ba2c13308ec0","type":"DataRange1d"},"y_scale":{"id":"033c20ae-e140-4c07-8ef8-f8b8edb9202b","type":"LinearScale"}},"id":"63ef5308-c098-4093-9722-95dbc75cbb92","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"890780ee-00fa-416d-afc8-babc93d3a119","type":"WheelZoomTool"},{"attributes":{},"id":"60a778b9-e3a0-4fb4-bcbf-b4ab2c0d1d0c","type":"ResetTool"},{"attributes":{},"id":"e880b502-88a7-4826-bcec-df571a36dbdb","type":"BasicTicker"},{"attributes":{},"id":"cd6e9aad-466a-474d-9bcc-ebed8c40fcd5","type":"UnionRenderers"},{"attributes":{"child":{"id":"a2d5ea58-c548-435f-9c16-4b28c3516b41","subtype":"Figure","type":"Plot"},"title":"line"},"id":"feeaa7a6-08e1-46d4-bd91-87eca10ad611","type":"Panel"},{"attributes":{"callback":null},"id":"e33f0eb1-9eb2-47ae-b71e-65deeed3ac58","type":"DataRange1d"},{"attributes":{"data_source":{"id":"f455e68d-ec5f-480f-aad0-d462b05afa1f","type":"ColumnDataSource"},"glyph":{"id":"e31ce220-163f-492e-af32-e2422944aaf2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7d009ce3-c815-4b2c-abbf-bc48ef6566df","type":"Circle"},"selection_glyph":null,"view":{"id":"446b4265-2727-4a9e-af13-1a9134f5ceee","type":"CDSView"}},"id":"3e2df0c7-fcc4-420c-a1c6-5098f23657da","type":"GlyphRenderer"},{"attributes":{},"id":"7874da55-6a90-4081-ba55-87a82aefe945","type":"LinearScale"},{"attributes":{"callback":null},"id":"0a56a5cf-82d7-421e-922e-98095afa39c8","type":"DataRange1d"},{"attributes":{},"id":"bd01ff31-5639-4db1-9c88-6972f94751f0","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c6c32dc9-2e21-4e63-921f-565de448a4c0","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"1c4cc326-e5b7-467f-bfa5-01c53ce34a47","type":"BoxAnnotation"}},"id":"19d42a62-eedd-402b-b892-714262f4fde1","type":"BoxZoomTool"},{"attributes":{"child":{"id":"63ef5308-c098-4093-9722-95dbc75cbb92","subtype":"Figure","type":"Plot"},"title":"circle"},"id":"72f70b47-006f-49f8-be1f-2c03bbe23146","type":"Panel"},{"attributes":{},"id":"e2caa1e3-3687-4e6b-be05-aeccac48ee11","type":"PanTool"},{"attributes":{"data_source":{"id":"6e8834a5-2f10-43c9-af89-ce0b0f4dc49f","type":"ColumnDataSource"},"glyph":{"id":"fb23ad96-f90f-4a40-8f88-8a10e19043ce","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"363cdf45-9419-47d4-8e58-11ab683dc3d8","type":"Line"},"selection_glyph":null,"view":{"id":"55af2574-287c-4e27-9960-d2492f1376a4","type":"CDSView"}},"id":"5e62d771-d472-4e90-a5b7-dc6a96149dbf","type":"GlyphRenderer"},{"attributes":{},"id":"94c90ae1-918c-4819-8d89-64eb1d6f3283","type":"SaveTool"},{"attributes":{"below":[{"id":"a9795abd-e60e-41b3-8f7a-375f5d3fda26","type":"LinearAxis"}],"left":[{"id":"31c37dcd-1650-49cd-a04d-daae83b486d4","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"a9795abd-e60e-41b3-8f7a-375f5d3fda26","type":"LinearAxis"},{"id":"e328ebe0-a911-4d48-9f72-210cdff31d62","type":"Grid"},{"id":"31c37dcd-1650-49cd-a04d-daae83b486d4","type":"LinearAxis"},{"id":"11f173e7-c4b8-4dfc-9e9b-b79e91038c26","type":"Grid"},{"id":"1c4cc326-e5b7-467f-bfa5-01c53ce34a47","type":"BoxAnnotation"},{"id":"5e62d771-d472-4e90-a5b7-dc6a96149dbf","type":"GlyphRenderer"}],"title":{"id":"6e12a07c-b289-4f09-bf5c-0b6056fbb8b4","type":"Title"},"toolbar":{"id":"27c804db-5f97-4f09-b2e0-9fac74654604","type":"Toolbar"},"x_range":{"id":"d52247f5-3a68-440c-bbaa-c2b4c7b772ff","type":"DataRange1d"},"x_scale":{"id":"171c9f2b-a3ae-4e3c-af80-4677cf3627c9","type":"LinearScale"},"y_range":{"id":"e33f0eb1-9eb2-47ae-b71e-65deeed3ac58","type":"DataRange1d"},"y_scale":{"id":"9f84711b-f3b8-4c3c-8c20-13bdf291deaf","type":"LinearScale"}},"id":"a2d5ea58-c548-435f-9c16-4b28c3516b41","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"99490ae9-3eab-4418-9161-1411e2325e3d","type":"PanTool"},{"id":"0339b14c-dd40-4180-98dc-54992d7e3f25","type":"WheelZoomTool"},{"id":"19d42a62-eedd-402b-b892-714262f4fde1","type":"BoxZoomTool"},{"id":"a33af62d-ea53-4eb7-bc5f-2e9a04c982f1","type":"SaveTool"},{"id":"60a778b9-e3a0-4fb4-bcbf-b4ab2c0d1d0c","type":"ResetTool"},{"id":"bd01ff31-5639-4db1-9c88-6972f94751f0","type":"HelpTool"}]},"id":"27c804db-5f97-4f09-b2e0-9fac74654604","type":"Toolbar"},{"attributes":{},"id":"5b6be118-6256-44a0-af80-e55ac20e8f26","type":"BasicTicker"},{"attributes":{},"id":"6e6a1d7d-91b7-4115-85a6-2df5873cdb2d","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d009ce3-c815-4b2c-abbf-bc48ef6566df","type":"Circle"},{"attributes":{},"id":"033c20ae-e140-4c07-8ef8-f8b8edb9202b","type":"LinearScale"},{"attributes":{"source":{"id":"f455e68d-ec5f-480f-aad0-d462b05afa1f","type":"ColumnDataSource"}},"id":"446b4265-2727-4a9e-af13-1a9134f5ceee","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"1404e0b9-52cc-40ef-9b4e-e4c099c20631","type":"Selection"},"selection_policy":{"id":"cd6e9aad-466a-474d-9bcc-ebed8c40fcd5","type":"UnionRenderers"}},"id":"f455e68d-ec5f-480f-aad0-d462b05afa1f","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"363cdf45-9419-47d4-8e58-11ab683dc3d8","type":"Line"},{"attributes":{"source":{"id":"6e8834a5-2f10-43c9-af89-ce0b0f4dc49f","type":"ColumnDataSource"}},"id":"55af2574-287c-4e27-9960-d2492f1376a4","type":"CDSView"},{"attributes":{},"id":"41724e75-0151-4e05-a475-8cfffb86abdd","type":"UnionRenderers"},{"attributes":{"plot":{"id":"63ef5308-c098-4093-9722-95dbc75cbb92","subtype":"Figure","type":"Plot"},"ticker":{"id":"e8703bd4-530b-43e4-9067-178d354ff73d","type":"BasicTicker"}},"id":"eb16e9c9-87b6-4f52-b31b-363fa0e7a7e7","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"63ef5308-c098-4093-9722-95dbc75cbb92","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b6be118-6256-44a0-af80-e55ac20e8f26","type":"BasicTicker"}},"id":"a908995e-55e9-469f-a9a2-9641743be098","type":"Grid"},{"attributes":{},"id":"080bc2ee-f2d3-4142-8af0-ec02bf9bdd1c","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]},"selected":{"id":"cd4e4be9-3699-43e9-af21-c050e3044b34","type":"Selection"},"selection_policy":{"id":"41724e75-0151-4e05-a475-8cfffb86abdd","type":"UnionRenderers"}},"id":"6e8834a5-2f10-43c9-af89-ce0b0f4dc49f","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"a2d5ea58-c548-435f-9c16-4b28c3516b41","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3f1c28f-e9bf-4acd-b047-367c56a6dd20","type":"BasicTicker"}},"id":"e328ebe0-a911-4d48-9f72-210cdff31d62","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"a2d5ea58-c548-435f-9c16-4b28c3516b41","subtype":"Figure","type":"Plot"},"ticker":{"id":"e880b502-88a7-4826-bcec-df571a36dbdb","type":"BasicTicker"}},"id":"11f173e7-c4b8-4dfc-9e9b-b79e91038c26","type":"Grid"},{"attributes":{},"id":"4691d68a-a592-4d96-a702-99679faf3122","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1c4cc326-e5b7-467f-bfa5-01c53ce34a47","type":"BoxAnnotation"}],"root_ids":["440158de-c196-4375-a8d9-51bce499ffc4"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"4580dff6-e824-4cb9-b491-ee435ffa2c18","roots":{"440158de-c196-4375-a8d9-51bce499ffc4":"eb4e011b-8cb5-404d-ac0c-50876898bf29"}}];
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