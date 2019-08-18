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
      };var element = document.getElementById("dfb4a58d-0e0e-4eb7-a3c0-98872f02d052");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dfb4a58d-0e0e-4eb7-a3c0-98872f02d052' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.3.min.js"];
    
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
                    
                  var docs_json = '{"8546ecfe-c9a6-43d6-a91b-ac781e170e4b":{"roots":{"references":[{"attributes":{"source":{"id":"13442","type":"ColumnDataSource"}},"id":"13446","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"13489","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"13459","type":"Circle"},{"attributes":{},"id":"13527","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13487","type":"ColumnDataSource"},"glyph":{"id":"13488","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13489","type":"Circle"},"selection_glyph":null,"view":{"id":"13491","type":"CDSView"}},"id":"13490","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"13457","type":"ColumnDataSource"},"glyph":{"id":"13458","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13459","type":"Circle"},"selection_glyph":null,"view":{"id":"13461","type":"CDSView"}},"id":"13460","type":"GlyphRenderer"},{"attributes":{},"id":"13528","type":"Selection"},{"attributes":{"source":{"id":"13487","type":"ColumnDataSource"}},"id":"13491","type":"CDSView"},{"attributes":{"source":{"id":"13457","type":"ColumnDataSource"}},"id":"13461","type":"CDSView"},{"attributes":{},"id":"13529","type":"UnionRenderers"},{"attributes":{},"id":"13530","type":"Selection"},{"attributes":{"data_source":{"id":"13447","type":"ColumnDataSource"},"glyph":{"id":"13448","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13449","type":"Circle"},"selection_glyph":null,"view":{"id":"13451","type":"CDSView"}},"id":"13450","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":{"id":"13534","type":"Selection"},"selection_policy":{"id":"13535","type":"UnionRenderers"}},"id":"13492","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":{"id":"13522","type":"Selection"},"selection_policy":{"id":"13523","type":"UnionRenderers"}},"id":"13462","type":"ColumnDataSource"},{"attributes":{},"id":"13531","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]},"selected":{"id":"13510","type":"Selection"},"selection_policy":{"id":"13511","type":"UnionRenderers"}},"id":"13434","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"13453","type":"Circle"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"13493","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"13463","type":"Circle"},{"attributes":{},"id":"13532","type":"Selection"},{"attributes":{"source":{"id":"13447","type":"ColumnDataSource"}},"id":"13451","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"13494","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"13464","type":"Circle"},{"attributes":{},"id":"13533","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13492","type":"ColumnDataSource"},"glyph":{"id":"13493","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13494","type":"Circle"},"selection_glyph":null,"view":{"id":"13496","type":"CDSView"}},"id":"13495","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"13462","type":"ColumnDataSource"},"glyph":{"id":"13463","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13464","type":"Circle"},"selection_glyph":null,"view":{"id":"13466","type":"CDSView"}},"id":"13465","type":"GlyphRenderer"},{"attributes":{},"id":"13534","type":"Selection"},{"attributes":{"source":{"id":"13492","type":"ColumnDataSource"}},"id":"13496","type":"CDSView"},{"attributes":{"source":{"id":"13462","type":"ColumnDataSource"}},"id":"13466","type":"CDSView"},{"attributes":{},"id":"13535","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":{"id":"13518","type":"Selection"},"selection_policy":{"id":"13519","type":"UnionRenderers"}},"id":"13452","type":"ColumnDataSource"},{"attributes":{},"id":"13536","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":{"id":"13536","type":"Selection"},"selection_policy":{"id":"13537","type":"UnionRenderers"}},"id":"13497","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":{"id":"13524","type":"Selection"},"selection_policy":{"id":"13525","type":"UnionRenderers"}},"id":"13467","type":"ColumnDataSource"},{"attributes":{},"id":"13537","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"13454","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13419","type":"PanTool"},{"id":"13420","type":"WheelZoomTool"},{"id":"13421","type":"BoxZoomTool"},{"id":"13422","type":"SaveTool"},{"id":"13423","type":"ResetTool"},{"id":"13424","type":"HelpTool"}]},"id":"13425","type":"Toolbar"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"13498","type":"Circle"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"13468","type":"Circle"},{"attributes":{"data_source":{"id":"13452","type":"ColumnDataSource"},"glyph":{"id":"13453","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13454","type":"Circle"},"selection_glyph":null,"view":{"id":"13456","type":"CDSView"}},"id":"13455","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"13499","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"13469","type":"Circle"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":{"id":"13516","type":"Selection"},"selection_policy":{"id":"13517","type":"UnionRenderers"}},"id":"13447","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"13497","type":"ColumnDataSource"},"glyph":{"id":"13498","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13499","type":"Circle"},"selection_glyph":null,"view":{"id":"13501","type":"CDSView"}},"id":"13500","type":"GlyphRenderer"},{"attributes":{"source":{"id":"13452","type":"ColumnDataSource"}},"id":"13456","type":"CDSView"},{"attributes":{"data_source":{"id":"13467","type":"ColumnDataSource"},"glyph":{"id":"13468","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13469","type":"Circle"},"selection_glyph":null,"view":{"id":"13471","type":"CDSView"}},"id":"13470","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13427","type":"BoxAnnotation"},{"attributes":{"source":{"id":"13497","type":"ColumnDataSource"}},"id":"13501","type":"CDSView"},{"attributes":{"source":{"id":"13467","type":"ColumnDataSource"}},"id":"13471","type":"CDSView"},{"attributes":{"below":[{"id":"13409","type":"LinearAxis"}],"left":[{"id":"13414","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"13409","type":"LinearAxis"},{"id":"13413","type":"Grid"},{"id":"13414","type":"LinearAxis"},{"id":"13418","type":"Grid"},{"id":"13427","type":"BoxAnnotation"},{"id":"13435","type":"Whisker"},{"id":"13440","type":"GlyphRenderer"},{"id":"13445","type":"GlyphRenderer"},{"id":"13450","type":"GlyphRenderer"},{"id":"13455","type":"GlyphRenderer"},{"id":"13460","type":"GlyphRenderer"},{"id":"13465","type":"GlyphRenderer"},{"id":"13470","type":"GlyphRenderer"},{"id":"13475","type":"GlyphRenderer"},{"id":"13480","type":"GlyphRenderer"},{"id":"13485","type":"GlyphRenderer"},{"id":"13490","type":"GlyphRenderer"},{"id":"13495","type":"GlyphRenderer"},{"id":"13500","type":"GlyphRenderer"}],"title":{"id":"13398","type":"Title"},"toolbar":{"id":"13425","type":"Toolbar"},"x_range":{"id":"13401","type":"DataRange1d"},"x_scale":{"id":"13405","type":"LinearScale"},"y_range":{"id":"13403","type":"DataRange1d"},"y_scale":{"id":"13407","type":"LinearScale"}},"id":"13399","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"13503","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"13505","type":"BasicTickFormatter"},"plot":{"id":"13399","subtype":"Figure","type":"Plot"},"ticker":{"id":"13410","type":"BasicTicker"}},"id":"13409","type":"LinearAxis"},{"attributes":{},"id":"13505","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":{"id":"13526","type":"Selection"},"selection_policy":{"id":"13527","type":"UnionRenderers"}},"id":"13472","type":"ColumnDataSource"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"13507","type":"TeeHead"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"13473","type":"Circle"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"13488","type":"Circle"},{"attributes":{"callback":null},"id":"13401","type":"DataRange1d"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"13508","type":"TeeHead"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"13474","type":"Circle"},{"attributes":{},"id":"13407","type":"LinearScale"},{"attributes":{},"id":"13510","type":"Selection"},{"attributes":{"data_source":{"id":"13472","type":"ColumnDataSource"},"glyph":{"id":"13473","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13474","type":"Circle"},"selection_glyph":null,"view":{"id":"13476","type":"CDSView"}},"id":"13475","type":"GlyphRenderer"},{"attributes":{},"id":"13405","type":"LinearScale"},{"attributes":{},"id":"13511","type":"UnionRenderers"},{"attributes":{"source":{"id":"13472","type":"ColumnDataSource"}},"id":"13476","type":"CDSView"},{"attributes":{"callback":null},"id":"13403","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"13448","type":"Circle"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"13398","type":"Title"},{"attributes":{},"id":"13512","type":"Selection"},{"attributes":{},"id":"13513","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":{"id":"13528","type":"Selection"},"selection_policy":{"id":"13529","type":"UnionRenderers"}},"id":"13477","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"13442","type":"ColumnDataSource"},"glyph":{"id":"13443","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13444","type":"Circle"},"selection_glyph":null,"view":{"id":"13446","type":"CDSView"}},"id":"13445","type":"GlyphRenderer"},{"attributes":{},"id":"13410","type":"BasicTicker"},{"attributes":{},"id":"13514","type":"Selection"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"13478","type":"Circle"},{"attributes":{"plot":{"id":"13399","subtype":"Figure","type":"Plot"},"ticker":{"id":"13410","type":"BasicTicker"}},"id":"13413","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"13444","type":"Circle"},{"attributes":{},"id":"13515","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"13479","type":"Circle"},{"attributes":{"formatter":{"id":"13503","type":"BasicTickFormatter"},"plot":{"id":"13399","subtype":"Figure","type":"Plot"},"ticker":{"id":"13415","type":"BasicTicker"}},"id":"13414","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"13399","subtype":"Figure","type":"Plot"},"ticker":{"id":"13415","type":"BasicTicker"}},"id":"13418","type":"Grid"},{"attributes":{},"id":"13516","type":"Selection"},{"attributes":{"data_source":{"id":"13477","type":"ColumnDataSource"},"glyph":{"id":"13478","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13479","type":"Circle"},"selection_glyph":null,"view":{"id":"13481","type":"CDSView"}},"id":"13480","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"13443","type":"Circle"},{"attributes":{},"id":"13415","type":"BasicTicker"},{"attributes":{},"id":"13517","type":"UnionRenderers"},{"attributes":{"source":{"id":"13477","type":"ColumnDataSource"}},"id":"13481","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":{"id":"13520","type":"Selection"},"selection_policy":{"id":"13521","type":"UnionRenderers"}},"id":"13457","type":"ColumnDataSource"},{"attributes":{},"id":"13518","type":"Selection"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"13508","type":"TeeHead"},"plot":{"id":"13399","subtype":"Figure","type":"Plot"},"source":{"id":"13434","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"13507","type":"TeeHead"}},"id":"13435","type":"Whisker"},{"attributes":{},"id":"13519","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":{"id":"13530","type":"Selection"},"selection_policy":{"id":"13531","type":"UnionRenderers"}},"id":"13482","type":"ColumnDataSource"},{"attributes":{},"id":"13419","type":"PanTool"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":{"id":"13514","type":"Selection"},"selection_policy":{"id":"13515","type":"UnionRenderers"}},"id":"13442","type":"ColumnDataSource"},{"attributes":{},"id":"13520","type":"Selection"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"13483","type":"Circle"},{"attributes":{},"id":"13521","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"13484","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"13439","type":"Circle"},{"attributes":{},"id":"13420","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":{"id":"13512","type":"Selection"},"selection_policy":{"id":"13513","type":"UnionRenderers"}},"id":"13437","type":"ColumnDataSource"},{"attributes":{},"id":"13522","type":"Selection"},{"attributes":{"data_source":{"id":"13482","type":"ColumnDataSource"},"glyph":{"id":"13483","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13484","type":"Circle"},"selection_glyph":null,"view":{"id":"13486","type":"CDSView"}},"id":"13485","type":"GlyphRenderer"},{"attributes":{},"id":"13422","type":"SaveTool"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"13438","type":"Circle"},{"attributes":{},"id":"13523","type":"UnionRenderers"},{"attributes":{},"id":"13526","type":"Selection"},{"attributes":{"source":{"id":"13482","type":"ColumnDataSource"}},"id":"13486","type":"CDSView"},{"attributes":{"source":{"id":"13437","type":"ColumnDataSource"}},"id":"13441","type":"CDSView"},{"attributes":{},"id":"13524","type":"Selection"},{"attributes":{"data_source":{"id":"13437","type":"ColumnDataSource"},"glyph":{"id":"13438","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13439","type":"Circle"},"selection_glyph":null,"view":{"id":"13441","type":"CDSView"}},"id":"13440","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"13427","type":"BoxAnnotation"}},"id":"13421","type":"BoxZoomTool"},{"attributes":{},"id":"13423","type":"ResetTool"},{"attributes":{},"id":"13525","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":{"id":"13532","type":"Selection"},"selection_policy":{"id":"13533","type":"UnionRenderers"}},"id":"13487","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"13458","type":"Circle"},{"attributes":{},"id":"13424","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"13449","type":"Circle"}],"root_ids":["13399"]},"title":"Bokeh Application","version":"1.0.3"}}';
                  var render_items = [{"docid":"8546ecfe-c9a6-43d6-a91b-ac781e170e4b","roots":{"13399":"dfb4a58d-0e0e-4eb7-a3c0-98872f02d052"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.3.min.css");
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