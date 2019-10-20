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
      };var element = document.getElementById("628bdc13-f873-4ae8-a32c-95f07a88bc8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '628bdc13-f873-4ae8-a32c-95f07a88bc8a' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-1.0.2.min.js"];
    
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
                    
                  var docs_json = '{"c1e907ab-a6a3-46f8-ae83-c4aef7c53a23":{"roots":{"references":[{"attributes":{"formatter":{"id":"13503","type":"BasicTickFormatter"},"plot":{"id":"13396","subtype":"Figure","type":"Plot"},"ticker":{"id":"13412","type":"BasicTicker"}},"id":"13411","type":"LinearAxis"},{"attributes":{},"id":"13521","type":"UnionRenderers"},{"attributes":{"source":{"id":"13449","type":"ColumnDataSource"}},"id":"13453","type":"CDSView"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAADAREDNzMzMzAxDQM3MzMzMDEBAmpmZmZmZQkAAAAAAAAA8QGZmZmZmZjpAzczMzMxMOECamZmZmRkzQGZmZmZmJkFAzczMzMzMPUDNzMzMzEw/QAAAAAAAgEJAmpmZmZkZQEDNzMzMzExHQGZmZmZm5jtAZmZmZmZmREBmZmZmZiZGQDMzMzMzs0VAMzMzMzMzQkAAAAAAAAA+QM3MzMzMTEZAZmZmZmbmQEDNzMzMzMw9QJqZmZmZWUBAMzMzMzOzN0AAAAAAAIBBQDMzMzMzM0BA","dtype":"float64","shape":[27]}},"selected":{"id":"13530","type":"Selection"},"selection_policy":{"id":"13529","type":"UnionRenderers"}},"id":"13484","type":"ColumnDataSource"},{"attributes":{},"id":"13522","type":"Selection"},{"attributes":{},"id":"13416","type":"PanTool"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":80},"y":{"field":"y"}},"id":"13485","type":"Circle"},{"attributes":{},"id":"13523","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAANEAAAAAAAAAzQAAAAAAAAC5AAAAAAAAAP0AAAAAAAAA6QAAAAAAAAEBAAAAAAAAAOUAAAAAAAAAwQAAAAAAAADBAAAAAAAAAMkAAAAAAAAAwQAAAAAAAACpAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAPUAAAAAAAAA6QAAAAAAAADpAAAAAAAAAP0AAAAAAAABAQAAAAAAAADxAAAAAAAAAOEAAAAAAAAA6QAAAAAAAADhAAAAAAAAAOkAAAAAAAAA/QA==","dtype":"float64","shape":[26]}},"selected":{"id":"13518","type":"Selection"},"selection_policy":{"id":"13517","type":"UnionRenderers"}},"id":"13454","type":"ColumnDataSource"},{"attributes":{},"id":"13417","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":80},"y":{"field":"y"}},"id":"13486","type":"Circle"},{"attributes":{},"id":"13524","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":74},"y":{"field":"y"}},"id":"13456","type":"Circle"},{"attributes":{"data_source":{"id":"13484","type":"ColumnDataSource"},"glyph":{"id":"13485","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13486","type":"Circle"},"selection_glyph":null,"view":{"id":"13488","type":"CDSView"}},"id":"13487","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"13424","type":"BoxAnnotation"}},"id":"13418","type":"BoxZoomTool"},{"attributes":{},"id":"13525","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13454","type":"ColumnDataSource"},"glyph":{"id":"13455","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13456","type":"Circle"},"selection_glyph":null,"view":{"id":"13458","type":"CDSView"}},"id":"13457","type":"GlyphRenderer"},{"attributes":{},"id":"13419","type":"SaveTool"},{"attributes":{"source":{"id":"13484","type":"ColumnDataSource"}},"id":"13488","type":"CDSView"},{"attributes":{},"id":"13526","type":"Selection"},{"attributes":{"source":{"id":"13454","type":"ColumnDataSource"}},"id":"13458","type":"CDSView"},{"attributes":{},"id":"13420","type":"ResetTool"},{"attributes":{},"id":"13527","type":"UnionRenderers"},{"attributes":{},"id":"13421","type":"HelpTool"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"MzMzMzMzO0CamZmZmZk6QM3MzMzMzDlAAAAAAACAN0AAAAAAAAA+QM3MzMzMjENAAAAAAACAQ0DNzMzMzIxBQGZmZmZmJkBAAAAAAACAQkCamZmZmdlCQM3MzMzMDEFAmpmZmZlZQUAzMzMzMzNBQGZmZmZm5j1AAAAAAACAQECamZmZmdlAQDMzMzMzM0BAMzMzMzNzQECamZmZmZk/QJqZmZmZGTxAMzMzMzOzPkBmZmZmZmY5QDMzMzMzMzhAZmZmZmZmNkCamZmZmZk6QDMzMzMzMzRAmpmZmZmZMUA=","dtype":"float64","shape":[28]}},"selected":{"id":"13532","type":"Selection"},"selection_policy":{"id":"13531","type":"UnionRenderers"}},"id":"13489","type":"ColumnDataSource"},{"attributes":{},"id":"13528","type":"Selection"},{"attributes":{},"id":"13520","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAM0AAAAAAAAAyQAAAAAAAAC5AAAAAAAAALkAAAAAAAAAwQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAsQAAAAAAAADFAAAAAAAAAMEAAAAAAAAAuQAAAAAAAADJAAAAAAAAANUAAAAAAAAA0QAAAAAAAACpAAAAAAAAAPUAAAAAAAAA3QAAAAAAAADRAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADlAAAAAAAAAOEAAAAAAAAAyQAAAAAAAAD1AAAAAAAAAM0AAAAAAAAA3QAAAAAAAADdAAAAAAAAANkAAAAAAAAA5QAAAAAAAgEBA","dtype":"float64","shape":[30]}},"selected":{"id":"13520","type":"Selection"},"selection_policy":{"id":"13519","type":"UnionRenderers"}},"id":"13459","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"13416","type":"PanTool"},{"id":"13417","type":"WheelZoomTool"},{"id":"13418","type":"BoxZoomTool"},{"id":"13419","type":"SaveTool"},{"id":"13420","type":"ResetTool"},{"id":"13421","type":"HelpTool"}]},"id":"13422","type":"Toolbar"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":81},"y":{"field":"y"}},"id":"13490","type":"Circle"},{"attributes":{},"id":"13529","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":75},"y":{"field":"y"}},"id":"13460","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":81},"y":{"field":"y"}},"id":"13491","type":"Circle"},{"attributes":{},"id":"13530","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":75},"y":{"field":"y"}},"id":"13461","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"13424","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"13489","type":"ColumnDataSource"},"glyph":{"id":"13490","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13491","type":"Circle"},"selection_glyph":null,"view":{"id":"13493","type":"CDSView"}},"id":"13492","type":"GlyphRenderer"},{"attributes":{},"id":"13531","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13459","type":"ColumnDataSource"},"glyph":{"id":"13460","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13461","type":"Circle"},"selection_glyph":null,"view":{"id":"13463","type":"CDSView"}},"id":"13462","type":"GlyphRenderer"},{"attributes":{"base":{"field":"base","units":"data"},"lower":{"field":"lower","units":"data"},"lower_head":{"id":"13504","type":"TeeHead"},"plot":{"id":"13396","subtype":"Figure","type":"Plot"},"source":{"id":"13431","type":"ColumnDataSource"},"upper":{"field":"upper","units":"data"},"upper_head":{"id":"13505","type":"TeeHead"}},"id":"13432","type":"Whisker"},{"attributes":{},"id":"13412","type":"BasicTicker"},{"attributes":{"source":{"id":"13489","type":"ColumnDataSource"}},"id":"13493","type":"CDSView"},{"attributes":{},"id":"13532","type":"Selection"},{"attributes":{"source":{"id":"13459","type":"ColumnDataSource"}},"id":"13463","type":"CDSView"},{"attributes":{"fill_color":{"value":"skyblue"},"line_color":{"value":"skyblue"},"x":{"value":74},"y":{"field":"y"}},"id":"13455","type":"Circle"},{"attributes":{},"id":"13533","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA7QAAAAAAAAEFAAAAAAAAAP0AAAAAAAAA9QAAAAAAAADtAAAAAAAAAOEAAAAAAAABCQAAAAAAAgEJAAAAAAAAAP0AAAAAAAABDQAAAAAAAAEJAAAAAAAAAQkAAAAAAAABCQAAAAAAAAEFAAAAAAAAAQ0AAAAAAAABAQAAAAAAAAENAAAAAAAAAOUAAAAAAAABDQAAAAAAAADpAAAAAAAAANkAAAAAAAABAQAAAAAAAAEJAAAAAAAAAO0AAAAAAAAA7QAAAAAAAAEZAAAAAAAAAQEAAAAAAAAA8QAAAAAAAAD9A","dtype":"float64","shape":[30]}},"selected":{"id":"13534","type":"Selection"},"selection_policy":{"id":"13533","type":"UnionRenderers"}},"id":"13494","type":"ColumnDataSource"},{"attributes":{},"id":"13534","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAPEAAAAAAAAA5QAAAAAAAADlAAAAAAAAAOkAAAAAAAAA7QAAAAAAAgDFAAAAAAAAAMEAAAAAAAAAvQAAAAAAAAC1AAAAAAAAANkAAAAAAAAA2QAAAAAAAADhAAAAAAACANkAAAAAAAAA9QAAAAAAAgDhAAAAAAAAAPUAAAAAAAIBAQAAAAAAAADRAAAAAAAAAMkAAAAAAAIAyQAAAAAAAgDFAAAAAAACAPUAAAAAAAABAQAAAAAAAADxAAAAAAACAOkAAAAAAAAA0QAAAAAAAACpAAAAAAAAAM0AAAAAAAAAzQAAAAAAAgDBAAAAAAACAMEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAKkA=","dtype":"float64","shape":[34]}},"selected":{"id":"13522","type":"Selection"},"selection_policy":{"id":"13521","type":"UnionRenderers"}},"id":"13464","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAMkAAAAAAAAAuQAAAAAAAADJAAAAAAAAAMEAAAAAAAAAxQAAAAAAAAC5AAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAALkAAAAAAAAAuQAAAAAAAACxAAAAAAAAALkAAAAAAAAAsQAAAAAAAADhAAAAAAAAANkAAAAAAAAAyQAAAAAAAADVAAAAAAAAAO0AAAAAAAAA6QAAAAAAAADlAAAAAAAAAOEAAAAAAAAA5QAAAAAAAADpAAAAAAAAANUAAAAAAAAAkQAAAAAAAACRAAAAAAAAAJkAAAAAAAAAiQA==","dtype":"float64","shape":[29]}},"selected":{"id":"13510","type":"Selection"},"selection_policy":{"id":"13509","type":"UnionRenderers"}},"id":"13434","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"x":{"value":82},"y":{"field":"y"}},"id":"13495","type":"Circle"},{"attributes":{"plot":null,"text":"Years vs mpg with Quartile Ranges"},"id":"13395","type":"Title"},{"attributes":{"fill_color":{"value":"salmon"},"line_color":{"value":"salmon"},"x":{"value":76},"y":{"field":"y"}},"id":"13465","type":"Circle"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":70},"y":{"field":"y"}},"id":"13435","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":82},"y":{"field":"y"}},"id":"13496","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":76},"y":{"field":"y"}},"id":"13466","type":"Circle"},{"attributes":{"data_source":{"id":"13494","type":"ColumnDataSource"},"glyph":{"id":"13495","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13496","type":"Circle"},"selection_glyph":null,"view":{"id":"13498","type":"CDSView"}},"id":"13497","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":70},"y":{"field":"y"}},"id":"13436","type":"Circle"},{"attributes":{"data_source":{"id":"13464","type":"ColumnDataSource"},"glyph":{"id":"13465","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13466","type":"Circle"},"selection_glyph":null,"view":{"id":"13468","type":"CDSView"}},"id":"13467","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"13434","type":"ColumnDataSource"},"glyph":{"id":"13435","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13436","type":"Circle"},"selection_glyph":null,"view":{"id":"13438","type":"CDSView"}},"id":"13437","type":"GlyphRenderer"},{"attributes":{"source":{"id":"13494","type":"ColumnDataSource"}},"id":"13498","type":"CDSView"},{"attributes":{"source":{"id":"13464","type":"ColumnDataSource"}},"id":"13468","type":"CDSView"},{"attributes":{},"id":"13501","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"13434","type":"ColumnDataSource"}},"id":"13438","type":"CDSView"},{"attributes":{},"id":"13503","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACAP0AAAAAAAAA+QAAAAAAAAEJAAAAAAACAOUAAAAAAAMBAQAAAAAAAgDFAAAAAAAAAMUAAAAAAAAAvQAAAAAAAAC5AAAAAAACAMUAAAAAAAIA0QAAAAAAAADNAAAAAAACAMkAAAAAAAAAwQAAAAAAAAC9AAAAAAAAAL0AAAAAAAAAwQAAAAAAAAD1AAAAAAACAOEAAAAAAAAA6QAAAAAAAgDlAAAAAAACAPkAAAAAAAMBAQAAAAAAAAD5AAAAAAACAPkAAAAAAAAA2QAAAAAAAgDVAAAAAAACANUA=","dtype":"float64","shape":[28]}},"selected":{"id":"13524","type":"Selection"},"selection_policy":{"id":"13523","type":"UnionRenderers"}},"id":"13469","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"13396","subtype":"Figure","type":"Plot"},"ticker":{"id":"13412","type":"BasicTicker"}},"id":"13415","type":"Grid"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"13504","type":"TeeHead"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAO0AAAAAAAAA8QAAAAAAAADlAAAAAAAAAM0AAAAAAAAAwQAAAAAAAADFAAAAAAAAAM0AAAAAAAAAyQAAAAAAAACxAAAAAAAAALEAAAAAAAAAsQAAAAAAAACxAAAAAAAAAKEAAAAAAAAAqQAAAAAAAACpAAAAAAAAAMkAAAAAAAAA2QAAAAAAAADNAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADxAAAAAAAAAPkAAAAAAAAA+QAAAAAAAAD9AAAAAAACAQUAAAAAAAAA7QAAAAAAAADpA","dtype":"float64","shape":[27]}},"selected":{"id":"13512","type":"Selection"},"selection_policy":{"id":"13511","type":"UnionRenderers"}},"id":"13439","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"red"},"line_color":{"value":"red"},"x":{"value":77},"y":{"field":"y"}},"id":"13470","type":"Circle"},{"attributes":{"level":"underlay","plot":null,"size":10},"id":"13505","type":"TeeHead"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":71},"y":{"field":"y"}},"id":"13440","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":77},"y":{"field":"y"}},"id":"13471","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":71},"y":{"field":"y"}},"id":"13441","type":"Circle"},{"attributes":{},"id":"13507","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13469","type":"ColumnDataSource"},"glyph":{"id":"13470","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13471","type":"Circle"},"selection_glyph":null,"view":{"id":"13473","type":"CDSView"}},"id":"13472","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"13439","type":"ColumnDataSource"},"glyph":{"id":"13440","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13441","type":"Circle"},"selection_glyph":null,"view":{"id":"13443","type":"CDSView"}},"id":"13442","type":"GlyphRenderer"},{"attributes":{},"id":"13508","type":"Selection"},{"attributes":{"data_source":{"id":"13449","type":"ColumnDataSource"},"glyph":{"id":"13450","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13451","type":"Circle"},"selection_glyph":null,"view":{"id":"13453","type":"CDSView"}},"id":"13452","type":"GlyphRenderer"},{"attributes":{"source":{"id":"13469","type":"ColumnDataSource"}},"id":"13473","type":"CDSView"},{"attributes":{"source":{"id":"13439","type":"ColumnDataSource"}},"id":"13443","type":"CDSView"},{"attributes":{},"id":"13509","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"13400","type":"DataRange1d"},{"attributes":{},"id":"13510","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"zczMzMyMRUDNzMzMzAxCQGZmZmZmZkBAMzMzMzOzQ0DNzMzMzAxCQGZmZmZm5jNAZmZmZmZmM0AzMzMzMzM0QDMzMzMzMzNAAAAAAACANEAzMzMzMzM0QJqZmZmZGTlAAAAAAACANEBmZmZmZmYzQJqZmZmZmTRAzczMzMzMNECamZmZmZkyQJqZmZmZGTJAMzMzMzMzM0AzMzMzM7MxQJqZmZmZGTJAAAAAAACAMUAAAAAAAAA+QAAAAAAAgDtAMzMzMzMzO0BmZmZmZuY+QJqZmZmZGTVAMzMzMzMzN0DNzMzMzMw3QGZmZmZm5jdAzczMzMxMNEAAAAAAAAAxQJqZmZmZmTVAMzMzMzMzMEAAAAAAAIA/QAAAAAAAgD1A","dtype":"float64","shape":[36]}},"selected":{"id":"13526","type":"Selection"},"selection_policy":{"id":"13525","type":"UnionRenderers"}},"id":"13474","type":"ColumnDataSource"},{"attributes":{},"id":"13402","type":"LinearScale"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAOEAAAAAAAAA5QAAAAAAAADdAAAAAAAAANEAAAAAAAAA1QAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAACxAAAAAAAAAMUAAAAAAAAAmQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAqQAAAAAAAADNAAAAAAAAALkAAAAAAAAAqQAAAAAAAACpAAAAAAAAALEAAAAAAAAAyQAAAAAAAADZAAAAAAAAANUAAAAAAAAA6QAAAAAAAADZAAAAAAAAAPEAAAAAAAAA3QAAAAAAAADxAAAAAAAAAO0A=","dtype":"float64","shape":[28]}},"selected":{"id":"13514","type":"Selection"},"selection_policy":{"id":"13513","type":"UnionRenderers"}},"id":"13444","type":"ColumnDataSource"},{"attributes":{},"id":"13511","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"olive"},"line_color":{"value":"olive"},"x":{"value":78},"y":{"field":"y"}},"id":"13475","type":"Circle"},{"attributes":{"source":{"id":"13479","type":"ColumnDataSource"}},"id":"13483","type":"CDSView"},{"attributes":{},"id":"13404","type":"LinearScale"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":72},"y":{"field":"y"}},"id":"13445","type":"Circle"},{"attributes":{},"id":"13512","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":78},"y":{"field":"y"}},"id":"13476","type":"Circle"},{"attributes":{"formatter":{"id":"13501","type":"BasicTickFormatter"},"plot":{"id":"13396","subtype":"Figure","type":"Plot"},"ticker":{"id":"13407","type":"BasicTicker"}},"id":"13406","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":72},"y":{"field":"y"}},"id":"13446","type":"Circle"},{"attributes":{},"id":"13513","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13474","type":"ColumnDataSource"},"glyph":{"id":"13475","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13476","type":"Circle"},"selection_glyph":null,"view":{"id":"13478","type":"CDSView"}},"id":"13477","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"13444","type":"ColumnDataSource"},"glyph":{"id":"13445","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13446","type":"Circle"},"selection_glyph":null,"view":{"id":"13448","type":"CDSView"}},"id":"13447","type":"GlyphRenderer"},{"attributes":{},"id":"13514","type":"Selection"},{"attributes":{"source":{"id":"13474","type":"ColumnDataSource"}},"id":"13478","type":"CDSView"},{"attributes":{},"id":"13407","type":"BasicTicker"},{"attributes":{"source":{"id":"13444","type":"ColumnDataSource"}},"id":"13448","type":"CDSView"},{"attributes":{},"id":"13515","type":"UnionRenderers"},{"attributes":{"plot":{"id":"13396","subtype":"Figure","type":"Plot"},"ticker":{"id":"13407","type":"BasicTicker"}},"id":"13410","type":"Grid"},{"attributes":{},"id":"13516","type":"Selection"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAACANUDNzMzMzMwzQM3MzMzMTDZAMzMzMzMzNECamZmZmZk0QAAAAAAAADFAmpmZmZmZMUAAAAAAAIAwQDMzMzMzMzJAZmZmZmbmMEAAAAAAAAAvQDMzMzMzMzNAAAAAAACAMkBmZmZmZuY/QM3MzMzMDEFAmpmZmZnZQUBmZmZmZmY7QGZmZmZmZjlAAAAAAAAAN0AzMzMzMzM7QGZmZmZm5jdAmpmZmZkZQUAAAAAAAEBBQM3MzMzMzD9AZmZmZmamQkBmZmZmZmY8QM3MzMzMzDxAzczMzMzMOkAAAAAAAMBAQA==","dtype":"float64","shape":[29]}},"selected":{"id":"13528","type":"Selection"},"selection_policy":{"id":"13527","type":"UnionRenderers"}},"id":"13479","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"y":{"__ndarray__":"AAAAAAAAKkAAAAAAAAAsQAAAAAAAACpAAAAAAAAALEAAAAAAAAAuQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAAKkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAMkAAAAAAAAAwQAAAAAAAADJAAAAAAAAAMkAAAAAAAAA3QAAAAAAAADpAAAAAAAAAJkAAAAAAAAAoQAAAAAAAACpAAAAAAAAAKEAAAAAAAAAyQAAAAAAAADRAAAAAAAAANUAAAAAAAAA2QAAAAAAAADJAAAAAAAAAM0AAAAAAAAA1QAAAAAAAADpAAAAAAAAALkAAAAAAAAAwQAAAAAAAAD1AAAAAAAAAOEAAAAAAAAA0QAAAAAAAADNAAAAAAAAALkAAAAAAAAA4QAAAAAAAADRAAAAAAAAAJkA=","dtype":"float64","shape":[40]}},"selected":{"id":"13516","type":"Selection"},"selection_policy":{"id":"13515","type":"UnionRenderers"}},"id":"13449","type":"ColumnDataSource"},{"attributes":{},"id":"13517","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"darkred"},"line_color":{"value":"darkred"},"x":{"value":79},"y":{"field":"y"}},"id":"13480","type":"Circle"},{"attributes":{"below":[{"id":"13406","type":"LinearAxis"}],"left":[{"id":"13411","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"13406","type":"LinearAxis"},{"id":"13410","type":"Grid"},{"id":"13411","type":"LinearAxis"},{"id":"13415","type":"Grid"},{"id":"13424","type":"BoxAnnotation"},{"id":"13432","type":"Whisker"},{"id":"13437","type":"GlyphRenderer"},{"id":"13442","type":"GlyphRenderer"},{"id":"13447","type":"GlyphRenderer"},{"id":"13452","type":"GlyphRenderer"},{"id":"13457","type":"GlyphRenderer"},{"id":"13462","type":"GlyphRenderer"},{"id":"13467","type":"GlyphRenderer"},{"id":"13472","type":"GlyphRenderer"},{"id":"13477","type":"GlyphRenderer"},{"id":"13482","type":"GlyphRenderer"},{"id":"13487","type":"GlyphRenderer"},{"id":"13492","type":"GlyphRenderer"},{"id":"13497","type":"GlyphRenderer"}],"title":{"id":"13395","type":"Title"},"toolbar":{"id":"13422","type":"Toolbar"},"x_range":{"id":"13398","type":"DataRange1d"},"x_scale":{"id":"13402","type":"LinearScale"},"y_range":{"id":"13400","type":"DataRange1d"},"y_scale":{"id":"13404","type":"LinearScale"}},"id":"13396","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"goldenrod"},"line_color":{"value":"goldenrod"},"x":{"value":73},"y":{"field":"y"}},"id":"13450","type":"Circle"},{"attributes":{},"id":"13518","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":79},"y":{"field":"y"}},"id":"13481","type":"Circle"},{"attributes":{"callback":null,"data":{"base":[70,71,72,73,74,75,76,77,78,79,80,81,82],"lower":[12.350424032768164,14.435476117786315,13.278756895028701,12.399754507229684,16.231294138716876,15.326100362861114,15.684232040310981,16.69913828561214,17.163066759773855,18.298886840723156,26.91784967134245,24.550394827438176,26.767475719614136],"upper":[23.028886312059424,27.786746104435906,24.14981453354273,21.80024549277032,29.307167399744664,25.20723297047222,27.462826783218432,30.05086171438786,30.959155462448372,31.887320055828546,40.689557736064955,35.821033743990405,37.23252428038586]},"selected":{"id":"13508","type":"Selection"},"selection_policy":{"id":"13507","type":"UnionRenderers"}},"id":"13431","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"value":73},"y":{"field":"y"}},"id":"13451","type":"Circle"},{"attributes":{},"id":"13519","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"13479","type":"ColumnDataSource"},"glyph":{"id":"13480","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13481","type":"Circle"},"selection_glyph":null,"view":{"id":"13483","type":"CDSView"}},"id":"13482","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"13398","type":"DataRange1d"}],"root_ids":["13396"]},"title":"Bokeh Application","version":"1.0.2"}}';
                  var render_items = [{"docid":"c1e907ab-a6a3-46f8-ae83-c4aef7c53a23","roots":{"13396":"628bdc13-f873-4ae8-a32c-95f07a88bc8a"}}];
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-1.0.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-1.0.2.min.css");
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