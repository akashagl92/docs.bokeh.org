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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("17c4fecd-ae9c-4231-a1c0-a693230143f8");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '17c4fecd-ae9c-4231-a1c0-a693230143f8' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"dc7a9eae-8d85-4f0e-84b0-037af6412425":{"roots":{"references":[{"attributes":{},"id":"64acd71e-53bc-4842-be22-e8648f5c498d","type":"DatetimeTickFormatter"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"84171c50-3c13-478e-b5d4-0ade554a8c22","type":"VBar"},{"attributes":{"plot":{"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"}},"id":"60ed18ab-f6fd-484a-b203-4c707a51d1f8","type":"PanTool"},{"attributes":{"callback":null,"column_names":["top","x","bottom"],"data":{"bottom":{"__ndarray__":"pHA9CtezVkBI4XoUrldXQEjhehSuB1hApHA9CtfjV0AAAAAAAABZQAAAAAAAQFlAAAAAAACAWEBI4XoUrtdXQEjhehSu11hAAAAAAACwWUAAAAAAANBZQEjhehSu91tApHA9CtcTWkBcj8L1KMxaQAAAAAAAkFpApHA9CtdDVkBI4XoUrvdSQKRwPQrXI1RAXI/C9Si8U0BI4XoUrldRQKRwPQrXc1FAXI/C9ShcUkCkcD0K16NRQFyPwvUonFFASOF6FK7HUUA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"SOF6FK5nVkCkcD0K1/NWQAAAAAAAsFdApHA9CtdzV0CkcD0K19NXQKRwPQrX41hASOF6FK5nWECkcD0K16NXQAAAAAAA0FdAAAAAAAAwWECkcD0K17NZQKRwPQrXs1pASOF6FK7nWUBcj8L1KExaQAAAAAAAgFpAAAAAAADAVUAAAAAAAJBSQAAAAAAAIFNASOF6FK6nU0AAAAAAADBRQFyPwvUo3FBASOF6FK43UkBI4XoUrpdRQKRwPQrXk1FAAAAAAACQUUA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAOHu4a0IAAIADILlrQgAAAM/EuWtCAACAMbO7a0IAAIDI/LxrQgAAgF9GvmtCAACAjdnAa0IAAABZfsFrQgAAgCQjwmtCAAAAHlvFa0IAAIDp/8VrQgAAgIBJx2tCAAAAEcvLa0IAAAAEO9JrQgAAgM/f0mtCAACAZinUa0IAAABgYddrQgAAAPeq2GtCAAAAJT7ba0IAAAC8h9xrQgAAgIcs3WtCAAAAU9Hda0I=","dtype":"float64","shape":[25]}}},"id":"f3ccf484-62cb-4d02-a212-7f1a8ecc30e2","type":"ColumnDataSource"},{"attributes":{"days":[1,4,7,10,13,16,19,22,25,28]},"id":"43b80699-aa76-4317-89f0-5e3fcfb69d26","type":"DaysTicker"},{"attributes":{"months":[0,1,2,3,4,5,6,7,8,9,10,11]},"id":"86df0e5b-5ef0-4cb2-8cd1-054c2b608579","type":"MonthsTicker"},{"attributes":{"callback":null,"column_names":["x0","x1","y0","y1"],"data":{"x0":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"x1":{"__ndarray__":"AACAp/mza0IAAABznrRrQgAAgD5DtWtCAAAAoTG3a0IAAIBs1rdrQgAAADh7uGtCAACAAyC5a0IAAADPxLlrQgAAgDGzu2tCAAAA/Ve8a0IAAIDI/LxrQgAAAJShvWtCAACAX0a+a0IAAADCNMBrQgAAgI3ZwGtCAAAAWX7Ba0IAAIAkI8JrQgAAAPDHwmtCAACAUrbEa0IAAAAeW8VrQgAAgOn/xWtCAAAAtaTGa0IAAICAScdrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAAAAEcvLa0IAAIBzuc1rQgAAAD9ezmtCAACACgPPa0IAAADWp89rQgAAgKFM0GtCAAAABDvSa0IAAIDP39JrQgAAAJuE02tCAACAZinUa0IAAICUvNZrQgAAAGBh12tCAACAKwbYa0IAAAD3qthrQgAAgMJP2WtCAAAAJT7ba0IAAIDw4ttrQgAAALyH3GtCAACAhyzda0IAAABT0d1rQgAAgLW/32tCAAAAgWTga0IAAIBMCeFrQg==","dtype":"float64","shape":[50]},"y0":{"__ndarray__":"9ihcj8KFV0BI4XoUrtdXQEjhehSut1hASOF6FK5XWEAAAAAAAGBYQFyPwvUoDFhAAAAAAAAAWUAAAAAAAKBZQAAAAAAAEFlAAAAAAADQWEBI4XoUridYQFyPwvUoLFhAAAAAAADgWEAAAAAAAPBYQEjhehSux1lASOF6FK5nWkBI4XoUrjdcQAAAAAAAwFxAAAAAAAAQW0Bcj8L1KNxaQFyPwvUoPFtASOF6FK4nW0AAAAAAABBbQAAAAAAAIFhAAAAAAAAAV0AAAAAAACBWQAAAAAAAAFZASOF6FK5XVkBI4XoUridWQKRwPQrXg1VAAAAAAACQVEAAAAAAAJBUQAAAAAAA4FNAAAAAAAAAU0Bcj8L1KHxUQAAAAAAAYFRASOF6FK73U0AAAAAAAABRQAAAAAAAYFFASOF6FK7HUUBcj8L1KHxRQAAAAAAAwFFAAAAAAACAUkAAAAAAAGBSQKRwPQrXs1FAAAAAAADQUUCkcD0K1/NRQEjhehSu11FAXI/C9SicUUBI4XoUrvdQQA==","dtype":"float64","shape":[50]},"y1":{"__ndarray__":"XI/C9Sg8VkBI4XoUrsdWQEjhehSud1dASOF6FK6HVkBcj8L1KPxWQAAAAAAAwFZAAAAAAADAV0AAAAAAAOBYQAAAAAAAYFhASOF6FK7HV0Bcj8L1KGxXQAAAAAAAUFdAAAAAAACgV0AAAAAAACBYQAAAAAAAIFhASOF6FK5HWUBI4XoUrqdaQKRwPQrXY1tAXI/C9Sj8WUBI4XoUrpdZQEjhehSuR1pAAAAAAACgWUBI4XoUrgdaQAAAAAAAgFZAXI/C9Sg8VUBI4XoUrndVQOF6FK5HUVVAAAAAAABAVUAAAAAAAIBVQAAAAAAA4FRAAAAAAACwU0AAAAAAAMBTQAAAAAAAUFJAAAAAAABAUkBI4XoUrvdSQEjhehSuh1NAAAAAAABgU0AAAAAAAEBQQEjhehSu51BASOF6FK7XUEBI4XoUrtdQQAAAAAAAEFFAXI/C9SjsUUAAAAAAAGBRQKRwPQrXM1FApHA9CtdTUUBI4XoUrndRQFyPwvUobFFAAAAAAADgUEAAAAAAAHBQQA==","dtype":"float64","shape":[50]}}},"id":"0d8d975e-d220-4bb9-97f6-9d4916cd38c6","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"64acd71e-53bc-4842-be22-e8648f5c498d","type":"DatetimeTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"},"ticker":{"id":"de9fa60a-ba50-4ee9-89cc-8ba29fb2702b","type":"DatetimeTicker"}},"id":"be52a64f-b29f-4f31-ac43-1c40c4e03d3e","type":"DatetimeAxis"},{"attributes":{"overlay":{"id":"3eafc369-56e2-4de8-af63-2dc2688d898f","type":"BoxAnnotation"},"plot":{"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"}},"id":"585ee6bb-2955-4d6c-967b-7749dce0de8f","type":"BoxZoomTool"},{"attributes":{},"id":"9aff1e7e-a18e-4305-8b74-4643a3f61955","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["top","x","bottom"],"data":{"bottom":{"__ndarray__":"SOF6FK6nVkBI4XoUrjdXQEjhehSux1dASOF6FK7XV0BI4XoUrldYQFyPwvUo7FtApHA9CtcDWkBI4XoUrtdZQEjhehSut1ZApHA9CtcjVkBI4XoUrpdVQAAAAAAAgFVApHA9CteDVUBI4XoUrvdUQEjhehSu11NAAAAAAADQU0BI4XoUrodSQFyPwvUorFNASOF6FK6nUEAAAAAAAABRQAAAAAAAcFFASOF6FK53UUCkcD0K13NRQKRwPQrX81BAXI/C9SiMUEA=","dtype":"float64","shape":[25]},"top":{"__ndarray__":"AAAAAAAAWEBI4XoUrgdYQEjhehSup1hAXI/C9Sj8V0AAAAAAALBYQEjhehSuJ1xA4XoUrkfxWkBcj8L1KIxaQFyPwvUonFdApHA9CtfjVkAAAAAAABBWQEjhehSu91VASOF6FK4nVkBI4XoUrkdVQEjhehSuh1RASOF6FK43VEBI4XoUrsdTQFyPwvUoXFRAAAAAAADQUEAAAAAAAIBRQAAAAAAAsFFApHA9CtczUkBcj8L1KLxRQFyPwvUojFFAAAAAAADwUEA=","dtype":"float64","shape":[25]},"x":{"__ndarray__":"AAAAoTG3a0IAAIBs1rdrQgAAAP1XvGtCAAAAlKG9a0IAAADCNMBrQgAAAPDHwmtCAACAUrbEa0IAAAC1pMZrQgAAAOM3yWtCAACArtzJa0IAAAB6gcprQgAAgEUmy2tCAACAc7nNa0IAAAA/Xs5rQgAAgAoDz2tCAAAA1qfPa0IAAIChTNBrQgAAAJuE02tCAACAlLzWa0IAAIArBthrQgAAgMJP2WtCAACA8OLba0IAAIC1v99rQgAAAIFk4GtCAACATAnha0I=","dtype":"float64","shape":[25]}}},"id":"4fc8954e-7f7b-4113-b4e5-5907735a68c3","type":"ColumnDataSource"},{"attributes":{"months":[0,4,8]},"id":"4b656311-8194-4a28-83a0-1ab6aca45bbd","type":"MonthsTicker"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.3},"plot":{"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"},"ticker":{"id":"366f62c3-a1d1-42c7-88ba-0b54489556b3","type":"BasicTicker"}},"id":"f0a2a509-4654-499b-a75c-3c5d4a725bd6","type":"Grid"},{"attributes":{"data_source":{"id":"0d8d975e-d220-4bb9-97f6-9d4916cd38c6","type":"ColumnDataSource"},"glyph":{"id":"e8d7b4ca-4661-4e2e-ba59-91beed8d83b1","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"816eb93f-9340-4883-a679-7c085df175df","type":"Segment"},"selection_glyph":null},"id":"e50b4b8f-d907-4efe-aa80-20ca044e301b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7945aaad-d151-46cd-abd4-80e80faed8d2","type":"DataRange1d"},{"attributes":{"formatter":{"id":"9aff1e7e-a18e-4305-8b74-4643a3f61955","type":"BasicTickFormatter"},"plot":{"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"},"ticker":{"id":"366f62c3-a1d1-42c7-88ba-0b54489556b3","type":"BasicTicker"}},"id":"9689e7ac-942e-4109-971b-6c8a61db2d8a","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f3ccf484-62cb-4d02-a212-7f1a8ecc30e2","type":"ColumnDataSource"},"glyph":{"id":"84171c50-3c13-478e-b5d4-0ade554a8c22","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0a94593a-deb0-44a5-b1bc-05574778dbb8","type":"VBar"},"selection_glyph":null},"id":"16721bbe-a432-4641-8791-4da423edc585","type":"GlyphRenderer"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"e8d7b4ca-4661-4e2e-ba59-91beed8d83b1","type":"Segment"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"60ed18ab-f6fd-484a-b203-4c707a51d1f8","type":"PanTool"},{"id":"7ccb29ea-27e2-4e6b-9a82-a40635a81ed2","type":"WheelZoomTool"},{"id":"585ee6bb-2955-4d6c-967b-7749dce0de8f","type":"BoxZoomTool"},{"id":"a1ce280e-92d1-4896-b22f-50ed1a4013cd","type":"ResetTool"},{"id":"dea8929f-6998-4585-8a7c-43e6174990d5","type":"SaveTool"}]},"id":"e3878cb8-058d-429c-9e67-d58f19e0ad1e","type":"Toolbar"},{"attributes":{"plot":null,"text":"MSFT Candlestick"},"id":"feadc4ca-37c1-459f-8d41-6b0e038a7c07","type":"Title"},{"attributes":{"base":24,"mantissas":[1,2,4,6,8,12],"max_interval":43200000.0,"min_interval":3600000.0,"num_minor_ticks":0},"id":"5f919719-641c-4be0-9f98-22880912a442","type":"AdaptiveTicker"},{"attributes":{"callback":null},"id":"f868b9bb-9f0a-406d-b63a-2cbe7335a34c","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"0a94593a-deb0-44a5-b1bc-05574778dbb8","type":"VBar"},{"attributes":{"days":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},"id":"37b25e12-ccde-4891-8fe4-3e68bed21689","type":"DaysTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"816eb93f-9340-4883-a679-7c085df175df","type":"Segment"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#F2583E"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"5f9e2c8e-d0e1-4ac5-9b5d-720ddb824afe","type":"VBar"},{"attributes":{"plot":{"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"}},"id":"a1ce280e-92d1-4896-b22f-50ed1a4013cd","type":"ResetTool"},{"attributes":{"grid_line_alpha":{"value":0.3},"plot":{"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"},"ticker":{"id":"de9fa60a-ba50-4ee9-89cc-8ba29fb2702b","type":"DatetimeTicker"}},"id":"d518663e-3271-4a2f-ac9a-821a75f3545e","type":"Grid"},{"attributes":{},"id":"60094ae2-c471-4878-88bb-92bd7c30f35f","type":"ToolEvents"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":43200000},"x":{"field":"x"}},"id":"fd689886-69fe-4e75-92ec-f6916ebc3110","type":"VBar"},{"attributes":{},"id":"8749667a-3c26-45f5-a420-7dce67fee2c8","type":"YearsTicker"},{"attributes":{"num_minor_ticks":5},"id":"de9fa60a-ba50-4ee9-89cc-8ba29fb2702b","type":"DatetimeTicker"},{"attributes":{"below":[{"id":"be52a64f-b29f-4f31-ac43-1c40c4e03d3e","type":"DatetimeAxis"}],"left":[{"id":"9689e7ac-942e-4109-971b-6c8a61db2d8a","type":"LinearAxis"}],"plot_width":1000,"renderers":[{"id":"be52a64f-b29f-4f31-ac43-1c40c4e03d3e","type":"DatetimeAxis"},{"id":"d518663e-3271-4a2f-ac9a-821a75f3545e","type":"Grid"},{"id":"9689e7ac-942e-4109-971b-6c8a61db2d8a","type":"LinearAxis"},{"id":"f0a2a509-4654-499b-a75c-3c5d4a725bd6","type":"Grid"},{"id":"3eafc369-56e2-4de8-af63-2dc2688d898f","type":"BoxAnnotation"},{"id":"e50b4b8f-d907-4efe-aa80-20ca044e301b","type":"GlyphRenderer"},{"id":"16721bbe-a432-4641-8791-4da423edc585","type":"GlyphRenderer"},{"id":"32de165c-cec8-4cb5-b9d2-ad19a8a27cbd","type":"GlyphRenderer"}],"title":{"id":"feadc4ca-37c1-459f-8d41-6b0e038a7c07","type":"Title"},"tool_events":{"id":"60094ae2-c471-4878-88bb-92bd7c30f35f","type":"ToolEvents"},"toolbar":{"id":"e3878cb8-058d-429c-9e67-d58f19e0ad1e","type":"Toolbar"},"x_range":{"id":"7945aaad-d151-46cd-abd4-80e80faed8d2","type":"DataRange1d"},"y_range":{"id":"f868b9bb-9f0a-406d-b63a-2cbe7335a34c","type":"DataRange1d"}},"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3eafc369-56e2-4de8-af63-2dc2688d898f","type":"BoxAnnotation"},{"attributes":{},"id":"366f62c3-a1d1-42c7-88ba-0b54489556b3","type":"BasicTicker"},{"attributes":{"base":60,"mantissas":[1,2,5,10,15,20,30],"max_interval":1800000.0,"min_interval":1000.0,"num_minor_ticks":0},"id":"56b68861-863e-4518-84dd-2828ce0d6972","type":"AdaptiveTicker"},{"attributes":{"days":[1,15]},"id":"28c9c7e3-e959-4730-8e96-edd21d8daa8c","type":"DaysTicker"},{"attributes":{"days":[1,8,15,22]},"id":"30e7681a-5d38-4cfc-84c6-6c152fb20e57","type":"DaysTicker"},{"attributes":{"max_interval":500.0,"num_minor_ticks":0},"id":"7807c286-2200-49d5-990b-c4fc1a2bc1cd","type":"AdaptiveTicker"},{"attributes":{"plot":{"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"}},"id":"7ccb29ea-27e2-4e6b-9a82-a40635a81ed2","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"4fc8954e-7f7b-4113-b4e5-5907735a68c3","type":"ColumnDataSource"},"glyph":{"id":"5f9e2c8e-d0e1-4ac5-9b5d-720ddb824afe","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"fd689886-69fe-4e75-92ec-f6916ebc3110","type":"VBar"},"selection_glyph":null},"id":"32de165c-cec8-4cb5-b9d2-ad19a8a27cbd","type":"GlyphRenderer"},{"attributes":{"months":[0,2,4,6,8,10]},"id":"767e665e-2c2a-45db-a7b6-7093edf755fc","type":"MonthsTicker"},{"attributes":{"months":[0,6]},"id":"04c3ceb9-7320-4d22-adb2-b8c7c9dfad30","type":"MonthsTicker"},{"attributes":{"plot":{"id":"44c33097-763f-447a-ba67-df451f1ed156","subtype":"Figure","type":"Plot"}},"id":"dea8929f-6998-4585-8a7c-43e6174990d5","type":"SaveTool"}],"root_ids":["44c33097-763f-447a-ba67-df451f1ed156"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"dc7a9eae-8d85-4f0e-84b0-037af6412425","elementid":"17c4fecd-ae9c-4231-a1c0-a693230143f8","modelid":"44c33097-763f-447a-ba67-df451f1ed156"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
