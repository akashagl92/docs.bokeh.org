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
      };var element = document.getElementById("3feb0e7b-26e9-4a6a-a621-30dfdc774b56");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3feb0e7b-26e9-4a6a-a621-30dfdc774b56' but no matching script tag was found. ")
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
                    var docs_json = {"e6e76a70-31f7-491d-a24b-6684e6400ec3":{"roots":{"references":[{"attributes":{"data_source":{"id":"07e6854e-48f4-4073-ad74-ee65af919fda","type":"ColumnDataSource"},"glyph":{"id":"97e330c2-d47f-4883-a439-99d13f954b85","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2909a5a9-f47e-4892-93a3-c40de596097b","type":"Circle"},"selection_glyph":null,"view":{"id":"9c8ffdca-24fc-4c67-9708-51f8d5cdfacd","type":"CDSView"}},"id":"87816065-1351-427f-ba4f-e7f36e5ffaf0","type":"GlyphRenderer"},{"attributes":{},"id":"8e88652b-6594-413d-917d-faa6ba918cda","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"2909a5a9-f47e-4892-93a3-c40de596097b","type":"Circle"},{"attributes":{"data_source":{"id":"7d476ddc-5e73-43be-abc6-a472c591e7d3","type":"ColumnDataSource"},"glyph":{"id":"93c14b1f-82b4-4069-a665-714c9ab4eea9","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6419061e-3c8f-46da-a83f-f7f8e817cd12","type":"Line"},"selection_glyph":null,"view":{"id":"accea64e-e55e-4caf-b827-aed54558d841","type":"CDSView"}},"id":"c5e4e390-2b7a-4b97-b13b-db8c2027d418","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ca0f1509-6af0-4b53-b30a-088aecef3ee4","type":"BoxAnnotation"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6cfbb750-293c-45bf-a17f-3ec0aff55f1e","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"0781d7cb-fd05-4b85-9af1-0421f9eaebc5","type":"ColumnDataSource"},{"attributes":{},"id":"c6a79b5d-4f0e-4772-a1dc-b9d6e9e78807","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"79c7fd66-a1f9-41a4-8e0a-ac94c8cbb46f","type":"DataRange1d"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"586789fd-b3da-4d30-a11b-63dfbe21728c","type":"GlyphRenderer"},{"id":"87816065-1351-427f-ba4f-e7f36e5ffaf0","type":"GlyphRenderer"}]},"id":"8b2a7042-f6cf-4cc2-977d-94d86fa75727","type":"LegendItem"},{"attributes":{"label":{"value":"y=10^x^2"},"renderers":[{"id":"c5e4e390-2b7a-4b97-b13b-db8c2027d418","type":"GlyphRenderer"}]},"id":"21c79154-ba3d-4169-940d-47215f3d6e9b","type":"LegendItem"},{"attributes":{"source":{"id":"07e6854e-48f4-4073-ad74-ee65af919fda","type":"ColumnDataSource"}},"id":"9c8ffdca-24fc-4c67-9708-51f8d5cdfacd","type":"CDSView"},{"attributes":{"line_color":{"value":"red"},"x":{"field":"x"},"y":{"field":"y"}},"id":"839aae15-8b80-4237-9829-abfdc94e8f5c","type":"Line"},{"attributes":{"source":{"id":"2b8c243b-a8d4-4d59-b99d-8ccb81480b7a","type":"ColumnDataSource"}},"id":"42800acc-bcac-4f87-a7a3-232a1d3c2263","type":"CDSView"},{"attributes":{"items":[{"id":"8b2a7042-f6cf-4cc2-977d-94d86fa75727","type":"LegendItem"},{"id":"04a956b4-a63f-4bc4-9ace-d925671e948d","type":"LegendItem"},{"id":"f52e4e33-5c1a-4475-a2e3-46e9a7f83622","type":"LegendItem"},{"id":"21c79154-ba3d-4169-940d-47215f3d6e9b","type":"LegendItem"}],"plot":{"id":"281ccd52-d88b-4260-abf2-dc7c7b2e60b4","subtype":"Figure","type":"Plot"}},"id":"048f3d05-65ba-44f2-bfad-e65d9c3feba8","type":"Legend"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"97e330c2-d47f-4883-a439-99d13f954b85","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"281ccd52-d88b-4260-abf2-dc7c7b2e60b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"99722da3-2664-4297-ba37-21939de9b1c3","type":"LogTicker"}},"id":"4e457dc2-b35e-4ab3-a405-760052041fe1","type":"Grid"},{"attributes":{"data_source":{"id":"cfbe0700-3663-4dcb-8119-4a735b320611","type":"ColumnDataSource"},"glyph":{"id":"9d5d3236-4eb8-4738-9b04-fa9c48425b7f","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b2f110c6-d079-43da-bfa3-2b5d654a5cf2","type":"Line"},"selection_glyph":null,"view":{"id":"b21d3449-1c8e-4032-b1ec-40130f9f4f96","type":"CDSView"}},"id":"b464d267-595f-41e1-85ae-2658e25f71ae","type":"GlyphRenderer"},{"attributes":{},"id":"ed9404e5-db6a-4763-9421-3a3b95d3f664","type":"LinearScale"},{"attributes":{"line_color":{"value":"orange"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"93c14b1f-82b4-4069-a665-714c9ab4eea9","type":"Line"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"9d5d3236-4eb8-4738-9b04-fa9c48425b7f","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3db3ad6-0641-4cd0-89da-edbf80fb0ffe","type":"PanTool"},{"id":"533f9503-b928-4a57-880a-88552470ada6","type":"BoxZoomTool"},{"id":"8e88652b-6594-413d-917d-faa6ba918cda","type":"ResetTool"},{"id":"1b8cd724-c744-465d-b5bd-9e26f0183da0","type":"SaveTool"}]},"id":"f25fce95-6aa7-403c-a14e-ad3c3f54e62e","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_dash":[4,4],"x":{"field":"x"},"y":{"field":"y"}},"id":"6419061e-3c8f-46da-a83f-f7f8e817cd12","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.2589254117941673,3.1622776601683795,10.0,31.622776601683793,100.0,316.22776601683796,1000.0]}},"id":"2b8c243b-a8d4-4d59-b99d-8ccb81480b7a","type":"ColumnDataSource"},{"attributes":{},"id":"5bfc91f0-7be0-4349-9ce8-d8fc461b7f58","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68c5d677-4494-45ba-9975-df4615569eed","type":"Circle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[1.023292992280754,1.7782794100389228,10.0,177.82794100389228,10000.0,1778279.410038923,1000000000.0]}},"id":"7d476ddc-5e73-43be-abc6-a472c591e7d3","type":"ColumnDataSource"},{"attributes":{},"id":"d3db3ad6-0641-4cd0-89da-edbf80fb0ffe","type":"PanTool"},{"attributes":{"callback":null,"end":100000000000,"start":0.001},"id":"2bb8edeb-e8eb-4c50-8094-7cdea33bb73c","type":"Range1d"},{"attributes":{"source":{"id":"7d476ddc-5e73-43be-abc6-a472c591e7d3","type":"ColumnDataSource"}},"id":"accea64e-e55e-4caf-b827-aed54558d841","type":"CDSView"},{"attributes":{"data_source":{"id":"2b8c243b-a8d4-4d59-b99d-8ccb81480b7a","type":"ColumnDataSource"},"glyph":{"id":"76a21af4-f73a-4483-ac07-8bded1a710c2","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68c5d677-4494-45ba-9975-df4615569eed","type":"Circle"},"selection_glyph":null,"view":{"id":"42800acc-bcac-4f87-a7a3-232a1d3c2263","type":"CDSView"}},"id":"2b9fc1f9-fc77-485a-8610-b2fec50ffad0","type":"GlyphRenderer"},{"attributes":{"ticker":null},"id":"7b871724-90c4-42fa-999f-6331845e08e1","type":"LogTickFormatter"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"29868759-3567-4b8f-8900-e99d63d025ba","type":"Line"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9ac25ed3-4751-48c7-a35f-4a644a836c04","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.010000000000000002,0.25,1.0,2.25,4.0,6.25,9.0]}},"id":"cfbe0700-3663-4dcb-8119-4a735b320611","type":"ColumnDataSource"},{"attributes":{},"id":"39f64072-12ff-4b47-9cfc-389d54fe7e5f","type":"LogScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"07e6854e-48f4-4073-ad74-ee65af919fda","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"94ba1a8c-7c39-4b08-b709-fd9c2fbcea22","type":"LinearAxis"}],"left":[{"id":"17f54a68-85cf-4e73-b27a-1c8fc779c4b9","type":"LogAxis"}],"renderers":[{"id":"94ba1a8c-7c39-4b08-b709-fd9c2fbcea22","type":"LinearAxis"},{"id":"d2999830-e0ae-41ad-894a-1670a816b302","type":"Grid"},{"id":"17f54a68-85cf-4e73-b27a-1c8fc779c4b9","type":"LogAxis"},{"id":"4e457dc2-b35e-4ab3-a405-760052041fe1","type":"Grid"},{"id":"ca0f1509-6af0-4b53-b30a-088aecef3ee4","type":"BoxAnnotation"},{"id":"048f3d05-65ba-44f2-bfad-e65d9c3feba8","type":"Legend"},{"id":"586789fd-b3da-4d30-a11b-63dfbe21728c","type":"GlyphRenderer"},{"id":"87816065-1351-427f-ba4f-e7f36e5ffaf0","type":"GlyphRenderer"},{"id":"b464d267-595f-41e1-85ae-2658e25f71ae","type":"GlyphRenderer"},{"id":"cb0c2a2e-505e-4ed4-b259-ffec99f03ae4","type":"GlyphRenderer"},{"id":"2b9fc1f9-fc77-485a-8610-b2fec50ffad0","type":"GlyphRenderer"},{"id":"c5e4e390-2b7a-4b97-b13b-db8c2027d418","type":"GlyphRenderer"}],"title":{"id":"caf4911f-efa2-4984-9e29-391031a3f54c","type":"Title"},"toolbar":{"id":"f25fce95-6aa7-403c-a14e-ad3c3f54e62e","type":"Toolbar"},"x_range":{"id":"79c7fd66-a1f9-41a4-8e0a-ac94c8cbb46f","type":"DataRange1d"},"x_scale":{"id":"ed9404e5-db6a-4763-9421-3a3b95d3f664","type":"LinearScale"},"y_range":{"id":"2bb8edeb-e8eb-4c50-8094-7cdea33bb73c","type":"Range1d"},"y_scale":{"id":"39f64072-12ff-4b47-9cfc-389d54fe7e5f","type":"LogScale"}},"id":"281ccd52-d88b-4260-abf2-dc7c7b2e60b4","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"0781d7cb-fd05-4b85-9af1-0421f9eaebc5","type":"ColumnDataSource"}},"id":"3e9aa2a4-4d58-47f8-88a9-756e0ee327ef","type":"CDSView"},{"attributes":{"axis_label":"sections","formatter":{"id":"c6a79b5d-4f0e-4772-a1dc-b9d6e9e78807","type":"BasicTickFormatter"},"plot":{"id":"281ccd52-d88b-4260-abf2-dc7c7b2e60b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"5bfc91f0-7be0-4349-9ce8-d8fc461b7f58","type":"BasicTicker"}},"id":"94ba1a8c-7c39-4b08-b709-fd9c2fbcea22","type":"LinearAxis"},{"attributes":{"label":{"value":"y=x^2"},"renderers":[{"id":"b464d267-595f-41e1-85ae-2658e25f71ae","type":"GlyphRenderer"}]},"id":"04a956b4-a63f-4bc4-9ace-d925671e948d","type":"LegendItem"},{"attributes":{"overlay":{"id":"ca0f1509-6af0-4b53-b30a-088aecef3ee4","type":"BoxAnnotation"}},"id":"533f9503-b928-4a57-880a-88552470ada6","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"76a21af4-f73a-4483-ac07-8bded1a710c2","type":"Circle"},{"attributes":{"data_source":{"id":"43f0cff5-fa72-48c4-89f6-61247453059d","type":"ColumnDataSource"},"glyph":{"id":"6cfbb750-293c-45bf-a17f-3ec0aff55f1e","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"29868759-3567-4b8f-8900-e99d63d025ba","type":"Line"},"selection_glyph":null,"view":{"id":"1029b01a-0ca9-4da9-bc2e-6b730c5c385b","type":"CDSView"}},"id":"586789fd-b3da-4d30-a11b-63dfbe21728c","type":"GlyphRenderer"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"cb0c2a2e-505e-4ed4-b259-ffec99f03ae4","type":"GlyphRenderer"},{"id":"2b9fc1f9-fc77-485a-8610-b2fec50ffad0","type":"GlyphRenderer"}]},"id":"f52e4e33-5c1a-4475-a2e3-46e9a7f83622","type":"LegendItem"},{"attributes":{"source":{"id":"43f0cff5-fa72-48c4-89f6-61247453059d","type":"ColumnDataSource"}},"id":"1029b01a-0ca9-4da9-bc2e-6b730c5c385b","type":"CDSView"},{"attributes":{"data_source":{"id":"0781d7cb-fd05-4b85-9af1-0421f9eaebc5","type":"ColumnDataSource"},"glyph":{"id":"839aae15-8b80-4237-9829-abfdc94e8f5c","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9ac25ed3-4751-48c7-a35f-4a644a836c04","type":"Line"},"selection_glyph":null,"view":{"id":"3e9aa2a4-4d58-47f8-88a9-756e0ee327ef","type":"CDSView"}},"id":"cb0c2a2e-505e-4ed4-b259-ffec99f03ae4","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2f110c6-d079-43da-bfa3-2b5d654a5cf2","type":"Line"},{"attributes":{},"id":"1b8cd724-c744-465d-b5bd-9e26f0183da0","type":"SaveTool"},{"attributes":{"source":{"id":"cfbe0700-3663-4dcb-8119-4a735b320611","type":"ColumnDataSource"}},"id":"b21d3449-1c8e-4032-b1ec-40130f9f4f96","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0.1,0.5,1.0,1.5,2.0,2.5,3.0],"y":[0.1,0.5,1.0,1.5,2.0,2.5,3.0]}},"id":"43f0cff5-fa72-48c4-89f6-61247453059d","type":"ColumnDataSource"},{"attributes":{"num_minor_ticks":10},"id":"99722da3-2664-4297-ba37-21939de9b1c3","type":"LogTicker"},{"attributes":{"plot":null,"text":"log axis example"},"id":"caf4911f-efa2-4984-9e29-391031a3f54c","type":"Title"},{"attributes":{"axis_label":"particles","formatter":{"id":"7b871724-90c4-42fa-999f-6331845e08e1","type":"LogTickFormatter"},"plot":{"id":"281ccd52-d88b-4260-abf2-dc7c7b2e60b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"99722da3-2664-4297-ba37-21939de9b1c3","type":"LogTicker"}},"id":"17f54a68-85cf-4e73-b27a-1c8fc779c4b9","type":"LogAxis"},{"attributes":{"plot":{"id":"281ccd52-d88b-4260-abf2-dc7c7b2e60b4","subtype":"Figure","type":"Plot"},"ticker":{"id":"5bfc91f0-7be0-4349-9ce8-d8fc461b7f58","type":"BasicTicker"}},"id":"d2999830-e0ae-41ad-894a-1670a816b302","type":"Grid"}],"root_ids":["281ccd52-d88b-4260-abf2-dc7c7b2e60b4"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"e6e76a70-31f7-491d-a24b-6684e6400ec3","elementid":"3feb0e7b-26e9-4a6a-a621-30dfdc774b56","modelid":"281ccd52-d88b-4260-abf2-dc7c7b2e60b4"}];
                
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
